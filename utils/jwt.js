const jwt = require('jsonwebtoken');
require('dotenv').config() // loads in dotenv and adds values onto process.env
const { env } = require('node:process');

const generateToken = (userId) => {
  console.log("----"+ process.env.JWT_SECRET );
  return jwt.sign({ id: userId }, "your_secret_key", {
    expiresIn: '30d' // Token expiration time
  });
};

module.exports = { generateToken };
