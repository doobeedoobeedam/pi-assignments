const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@routes", "../../src/routes");
moduleAlias.addAlias("@middlewares", "../../src/middlewares");
const express = require("express");
const router = express.Router();
const todoRouter = require("./todo");
const userRouter = require("./user");
const verifyJwtGuard = require("@middlewares/verifyJwt");
const rateLimitGuard = require("@middlewares/rateLimiter");
router.use(rateLimitGuard);
router.use("/todo", verifyJwtGuard, todoRouter);
router.use("/", userRouter);
router.get("/", (req, res) => {
  return res.json({ success: true, message: "API is ready to use.." });
});
module.exports = router;
