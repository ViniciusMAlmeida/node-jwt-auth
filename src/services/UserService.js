const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  async generateHash(value) {
    return await bcrypt.hash(value, 8);
  },

  async compareHash(password, hash) {
    return await bcrypt.compare(password, hash);
  },

  generateToken(user) {
    return jwt.sign({ id: user.id }, 'chaveSecreta', {
      expiresIn: 3600,
    });
  },
};
