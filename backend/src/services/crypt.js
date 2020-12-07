const bcrypt = require("bcrypt");

async function compare(password, hash) {
  const result = await bcrypt.compare(password, hash);

  return result;
}

async function crypt(password) {
  const hash = await bcrypt.hash(password, 10);

  return hash;
}

module.exports = {
  compare,
  crypt,
};
