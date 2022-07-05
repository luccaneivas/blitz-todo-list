require('dotenv').config();
const { sign } = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

function createToken(userId, email) {
  const newToken = sign({ userId, email }, SECRET, { expiresIn: '1h' });

  return newToken;
}

module.exports = createToken;
