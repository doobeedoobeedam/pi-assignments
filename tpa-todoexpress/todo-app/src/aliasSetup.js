const path = require("path");
const moduleAlias = require("module-alias");
const FileAlias = () => {
  moduleAlias.addAlias("@controllers", path.join(__dirname, "src/controllers"));
  moduleAlias.addAlias("@middlewares", path.join(__dirname, "src/middlewares"));
  moduleAlias.addAlias("@validators", path.join(__dirname, "src/validators"));
  moduleAlias.addAlias("@routes", path.join(__dirname, "src/routes"));
  moduleAlias.addAlias("@models", path.join(__dirname, "src/models"));
};
module.exports = FileAlias;
