const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@config", path.join(__dirname, "../../config"));
const jwt = require("jsonwebtoken");
const jwtConf = require("@config/jwt.config");

const verifyTokenJwt = (token) => {
  return jwt.verify(token, jwtConf.secret);
};
const createTokenJwt = (data) => {
  return jwt.sign(data, jwtConf.secret, { expiresIn: jwtConf.ttl });
};
module.exports = { verifyTokenJwt, createTokenJwt };
