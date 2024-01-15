const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@services", path.join(__dirname, "../../src/services"));

const todoListServices = require("@services/todo.service");
const { validationResult } = require("express-validator");
exports.index = async (req, res) => {
  try {
    const tododata = await todoListServices.getAllData(req, res);
    return await res
      .status(200)
      .json({ success: true, message: "Success!", data: tododata });
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};

exports.detail = async (req, res) => {
  try {
    const tododata = await todoListServices.getDataById(req, res);
    if (tododata == null) {
      return await res
        .status(404)
        .json({ success: false, message: "Data tidak ditemukan!", data: [] });
    }
    return await res
      .status(200)
      .json({ success: true, message: "Success!", data: tododata });
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};

exports.new = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ success: false, message: { errors: errors.array() } });
    }
    if (typeof req.body.completed != "boolean") {
      return res.status(422).json({
        success: false,
        message: "Completed hanya berupa boolean true dan false!",
      });
    }
    const tododata = await todoListServices.createData(req, res);
    if (tododata) {
      return await res.status(200).json({
        success: true,
        message: "TodoList baru berhasil di tambahkan!",
        data: tododata,
      });
    }
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ success: false, message: { errors: errors.array() } });
    } else {
      if (typeof req.body.completed != "boolean") {
        return res.status(422).json({
          success: false,
          message: "Completed hanya berupa boolean true dan false!",
        });
      }
      const getdataById = await todoListServices.getDataById(req, res);
      if (getdataById == null) {
        return await res
          .status(404)
          .json({ success: false, message: "Data tidak ditemukan!", data: [] });
      }
      const tododata = await todoListServices.updateData(req, res);
      if (tododata) {
        return await res.status(200).json({
          success: true,
          message: "TodoList berhasil di rubah!",
          data: tododata,
        });
      }
    }
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const getdataById = await todoListServices.getDataById(req, res);
    if (getdataById == null) {
      return await res
        .status(404)
        .json({ success: false, message: "Data tidak ditemukan!", data: [] });
    }
    const todo_delete = await todoListServices.deleteData(req, res);
    if (todo_delete) {
      return await res.status(200).json({
        success: true,
        message: "TodoList berhasil di hapus!",
      });
    }
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};

exports.delete_all = async (req, res) => {
  try {
    const todo_delete_all = await todoListServices.deleteAllData(req, res);
    if (todo_delete_all == null) {
      return await res.status(404).json({
        success: false,
        message: "Data todoList tidak ditemukan!",
        data: [],
      });
    }
    return await res.status(200).json({
      success: true,
      message: "TodoList berhasil di hapus!",
    });
  } catch (error) {
    return await res.status(500).json({
      message: error?.message || "Server error!",
    });
  }
};
