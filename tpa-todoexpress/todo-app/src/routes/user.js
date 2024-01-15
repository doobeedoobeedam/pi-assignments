const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@controllers", "../../src/controllers");
moduleAlias.addAlias("@validators", "../../src/validators");
moduleAlias.addAlias("@middlewares", "../../src/middlewares");
const express = require("express");
const validator = require("@validators");
const router = express.Router();
const verifyJwtGuard = require("@middlewares/verifyJwt");
const userController = require("@controllers/userController.js");
router.get("/user-info", verifyJwtGuard, userController.info);
router.post("/login", validator.userValidator("login"), userController.login);
router.post("/logout", verifyJwtGuard, userController.logout);
router.post(
  "/register",
  validator.userValidator("register"),
  userController.register
);

module.exports = router;
