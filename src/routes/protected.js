// routes/protected.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, (req, res) => {
  res.send("Protected route accessed successfully");
});

module.exports = router;
