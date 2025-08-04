const express = require('express');
const router = express.Router();
const { register, login, getCurrentUser } = require('../controllers/auth.controller');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', (req, res, next) => {
  console.log('Register route hit');
  register(req, res, next);
});
router.post('/login', (req, res, next) => {
  console.log('Login route hit');
  login(req, res, next);
});

// Protected routes
router.get('/me', auth, getCurrentUser);

module.exports = router; 