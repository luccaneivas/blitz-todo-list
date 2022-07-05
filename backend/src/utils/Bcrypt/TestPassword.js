const { compareSync } = require('bcryptjs');

function testPassword(password, hash) {
  const test = compareSync(password, hash);

  return test;
}

module.exports = testPassword;
