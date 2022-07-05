const generatePassword = require('../utils/Bcrypt/GeneratePassword');
const { UserModel } = require('../database/models');

async function newUser(name, email, password) {
  const hash = generatePassword(password);

  const newUser = await UserModel.create({ name, email, password: hash });

  return newUser;
}

module.exports = { newUser };