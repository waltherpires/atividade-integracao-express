const taskServ = require('../services/taskService');

exports.getTask = taskServ.getTask;
exports.getAllTasks = taskServ.getAllTasks;
exports.deleteTask = taskServ.deleteTask;
exports.createTask = taskServ.createTask;