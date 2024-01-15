const setRateLimit = require("express-rate-limit");
const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 150,
  message: "You have exceeded your 150 requests per minute limit.",
  headers: true,
});

module.exports = rateLimitMiddleware;
