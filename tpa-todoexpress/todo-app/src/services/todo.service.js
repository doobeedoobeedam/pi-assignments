const path = require("path");
const moduleAlias = require("module-alias");
moduleAlias.addAlias("@models", path.join(__dirname, "../../src/models"));
const { Todo } = require("@models");
const getAllData = async (req, res) => {
  const todoData = await Todo.findAll({
    where: {
      user_id: req.user.id,
    },
  });
  const todo_ = todoData.map((item) => {
    return {
      id: item.id,
      task: item.task,
      description: item.description != null ? item.description : "-",
      completed: item.completed == 1 ? true : false,
      user_id: item.user_id,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  });
  return todo_;
};
const getDataById = async (req, res) => {
  const todoData = await Todo.findOne({
    where: {
      id: req.params.id,
      user_id: req.user.id,
    },
  });
  if (todoData != null) {
    const todo_ = {
      id: todoData.id,
      task: todoData.task,
      description: todoData.description != null ? todoData.description : "-",
      completed: todoData.completed == 1 ? true : false,
      user_id: todoData.user_id,
      createdAt: todoData.createdAt,
      updatedAt: todoData.updatedAt,
    };
    return todo_;
  }
  return null;
};
const createData = async (req, res) => {
  const data = {
    task: req.body.task,
    description:
      req.body.description == undefined || req.body.description == null
        ? null
        : req.body.description,
    completed: req.body.completed ? 1 : null,
    user_id: req.user.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const tododata = await Todo.create(data);
  const todo_result = {
    id: tododata.id,
    task: tododata.task,
    description: tododata.description,
    completed: tododata.completed != null ? true : false,
    user_id: tododata.user_id,
    createdAt: tododata.createdAt,
    updatedAt: tododata.updatedAt,
  };
  return todo_result;
};
const updateData = async (req, res) => {
  const data = {
    task: req.body.task,
    description:
      req.body.description == undefined || req.body.description == null
        ? null
        : req.body.description,
    completed: req.body.completed ? 1 : null,
    user_id: req.user.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const tododata_update = await Todo.update(data, {
    where: {
      id: req.params.id,
      user_id: req.user.id,
    },
  });
  const tododata = await Todo.findOne({
    where: {
      id: req.params.id,
      user_id: req.user.id,
    },
  });
  const todo_result = {
    id: tododata.id,
    task: tododata.task,
    description: tododata.description,
    completed: tododata.completed != null ? true : false,
    user_id: tododata.user_id,
    createdAt: tododata.createdAt,
    updatedAt: tododata.updatedAt,
  };
  return todo_result;
};
const deleteData = async (req, res) => {
  const todo = await Todo.destroy({
    where: {
      id: req.params.id,
      user_id: req.user.id,
    },
  });
  return todo;
};

const deleteAllData = async (req, res) => {
  const todo = await Todo.findOne({
    where: {
      user_id: req.user.id,
    },
  });
  if (todo == null) {
    return null;
  }
  const todo_list_deleteAll = await Todo.destroy({
    where: {
      user_id: req.user.id,
    },
  });
  return todo_list_deleteAll;
};
module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
  deleteAllData,
};
