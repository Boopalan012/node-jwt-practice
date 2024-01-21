// authMiddleware.js
const jwt = require('jsonwebtoken');
const { Log } = require('node-file-logger');

const secretKey = '12345'; 

const authenticateToken = (req, res, next) => {
  const token = req.header('authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }
    req.user = user;
    console.log("user",user);
    next();
  });
};

module.exports = authenticateToken;
