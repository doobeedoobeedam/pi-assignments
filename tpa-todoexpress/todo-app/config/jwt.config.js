require("dotenv").config();

module.exports = {
  secret: process.env.JWT_SECRET,
  ttl: 3600,
};
