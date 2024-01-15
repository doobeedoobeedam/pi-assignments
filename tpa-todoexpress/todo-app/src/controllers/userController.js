const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@models", path.join(__dirname, "../../src/models"));
moduleAlias.addAlias("@services", path.join(__dirname, "../../src/services"));
const { User } = require("@models");
const userServices = require("@services/user.service");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ success: false, message: { errors: errors.array() } });
    }
    return userServices.processingRegistered(req, res);
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ success: false, message: { errors: errors.array() } });
    }
    return userServices.processingAuth(req, res);
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};
const info = async (req, res) => {
  return res.json({ user: userServices.getUserInfo(req, res) });
};
const logout = async (req, res) => {
  const logoutdata = await userServices.processingLogout(
    req.token,
    req.user.exp
  );
  return res.json({ success: true, message: "Logged out success!" });
};
module.exports = { register, login, info, logout };
