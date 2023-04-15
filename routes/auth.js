const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  console.log("register");
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  // TODO: Handle user login
});

module.exports = router;
