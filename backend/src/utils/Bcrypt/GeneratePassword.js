const { hashSync } = require('bcryptjs');

function generatePassword(password) {
  const hash = hashSync(password, 10);

  return hash;
}

module.exports = generatePassword;
