const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@controllers", "../../src/controllers");
moduleAlias.addAlias("@validators", "../../src/validators");
const express = require("express");
const router = express.Router();
const todoController = require("@controllers/todoController.js");
const validator = require("@validators");
router.get("/", todoController.index);
router.get("/:id", todoController.detail);
router.post(
  "/",
  validator.todoValidator("create-new-todo"),
  todoController.new
);
router.put("/update/:id",validator.todoValidator("create-new-todo"), todoController.update);
router.delete("/delete/:id", todoController.delete);
router.delete("/delete-all", todoController.delete_all);

module.exports = router;
