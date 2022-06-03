// Comment

const fs = require('fs');
const jwt = require('jsonwebtoken');

function getSecret() {
  return fs
    .readFileSync(`${process.cwd()}/jwt.evaluation.key`, { encoding: 'utf-8' })
    .trim();
}

function createToken(jwtData) {
  const jwtConfig = { expiresIn: '12h', algorithm: 'HS256' };
  const token = jwt.sign(jwtData, getSecret(), jwtConfig);
  return token;
}

function verifyToken(authorization) {
  return jwt.verify(authorization, getSecret());
}

module.exports = { createToken, verifyToken };
