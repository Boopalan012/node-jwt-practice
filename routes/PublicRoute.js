// PublicRoutes.js
const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
router.get("/login", (req, res) => {
  const user = { id: 1, username: 'exampleUser',password:'Password@123'};
  let key="12345";
  const token = jwt.sign(user, key);
  res.json({ token });
});


module.exports = router;
