const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@models", path.join(__dirname, "../../src/models"));
moduleAlias.addAlias("@services", path.join(__dirname, "../../src/services"));
const { User } = require("@models");
const jwtServices = require("@services/jwt.service");
const cacheServices = require("@services/cache.service");
const bcrypt = require("bcrypt");
const processingRegistered = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user_ = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user_ != null) {
      return res.status(400).json({
        success: false,
        message: "Registrasi gagal, Email telah terdaftar!",
      });
    }
    const user_baru = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.status(200).json({
      success: true,
      message: "User baru berhasil di daftarkan!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User baru gagal di daftarkan!",
    });
  }
};

const processingAuth = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user_ = await User.findOne({
      where: {
        email: email,
      },
    });
    if (user_ == null) {
      return res.status(404).json({
        success: false,
        message: "Login gagal, Email belum terdaftar!",
      });
    } else {
      var cek_password = bcrypt.compareSync(req.body.password, user_.password);
      if (!cek_password) {
        return res.status(401).send({
          success: false,
          message: "Password salah!",
        });
      } else {
        let data = {
          id: user_.id,
          name: user_.name,
          email: user_.email,
        };
        const token = jwtServices.createTokenJwt(data);
        return res.status(200).json({
          success: true,
          message: "Berhasil login!",
          data: data,
          token: token,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "User gagal melakukan autentikasi!",
    });
  }
};
const processingLogout = async (token, exp) => {
  const now = new Date();
  const expire = new Date(exp * 1000);
  const milliseconds = expire.getTime() - now.getTime();
  /* ----------------------------- BlackList Token ---------------------------- */
  return await cacheServices.set(token, token, milliseconds);
};

const getUserInfo = async (req, res) => {
  return res.json({ user: jwtServices.verifyTokenJwt(req.headers.authorization.replace('Bearer ', '')) });
};

module.exports = {
  processingRegistered,
  processingAuth,
  processingLogout,
  getUserInfo,
};
