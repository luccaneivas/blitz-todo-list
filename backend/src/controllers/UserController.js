const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');
const createToken = require('../utils/JsonWebToken/CreateToken');

async function registerUser(request, response, next) {
  const { name, email, password } = request.body;

  try {
    const { id, createdAt } = await UserService.newUser(name, email, password);

    const token = createToken(id, email);

    return response.status(StatusCodes.CREATED).json({
      user: { id, name, email, createdAt },
      token
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { registerUser };
