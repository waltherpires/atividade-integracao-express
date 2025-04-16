const express = require('express');
const taskController = require('../controller/taskController');

const router = express.Router();

router.get("/tasks", taskController.funcGetUsers);
router.get("/tasks/:id", taskController.funcGetUsers);


module.exports = router;