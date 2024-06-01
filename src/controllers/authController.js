// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function register(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
}

async function login(req, res) {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send("User not found");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = generateAccessToken({ username: user.username });
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send("Invalid password");
    }
  } catch {
    res.status(500).send("Internal server error");
  }
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60d' });
}

module.exports = { register, login };
