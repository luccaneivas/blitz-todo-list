const { Router } = require('express');
const UserController = require('../controllers/UserController');
const RegisterMiddleware = require('../middlewares/Register');

const route = Router();

route.post('/', RegisterMiddleware, UserController.registerUser);

module.exports = route;
