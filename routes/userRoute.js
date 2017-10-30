const express = require('express');
const userRouter = express.Router();
const usersController = require('../controller/usersController.js');
const authHelpers = require('../services/auth/auth-helpers.js');

userRouter.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRouter;
