const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Route to register a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password before saving it to the database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user object and save it to the database
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  // Generate a JWT token for the user
  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  // Return the user data along with the token
  res.json({
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
    token,
  });
});

// Route to log in an existing user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Check if the password is correct
  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Generate a JWT token for the user
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  // Return the user data along with the token
  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  });
});

module.exports = router;
