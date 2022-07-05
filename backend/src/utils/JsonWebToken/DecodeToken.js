require('dotenv').config();
const { verify } = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

function decodeToken(token) {
  const decoded = verify(token, SECRET);

  return decoded;
}

module.exports = decodeToken;
