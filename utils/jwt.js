const jwt = require('jsonwebtoken');
require('dotenv').config() // loads in dotenv and adds values onto process.env
const { env } = require('node:process');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, env.JWT_SECRET , {
    expiresIn: '30d' // Token expiration time
  });
};

module.exports = { generateToken };
