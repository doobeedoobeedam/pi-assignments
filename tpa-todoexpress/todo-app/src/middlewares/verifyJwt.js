const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@services", path.join(__dirname, "../../src/services"));
const cacheServices = require("@services/cache.service");
const jwtServices = require("@services/jwt.service");
module.exports = async (req, res, next) => {
  var token = req.headers.authorization;
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    try {
      token = token.trim();
      const blacklistJToken = await cacheServices.get(token);
      if (blacklistJToken) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const decoded = jwtServices.verifyTokenJwt(token);
      req.user = decoded;
      req.token = token;
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: error?.message || "Unauthorized" });
    }
  } else {
    return res
      .status(400)
      .json({ message: "Authorization header is missing." });
  }
};
