require("dotenv").config();
const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@routes", path.join(__dirname, "src/routes"));
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const MainRouter = require("@routes/index"); //never change this file.!
const parser = require("body-parser");
app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(MainRouter);
app.use(function (req, res) {
  return res
    .status(404)
    .json({ status: false, message: "route's not found..!" });
});
app.listen(port, () => {
  console.log("listening.., port : " + port);
});
