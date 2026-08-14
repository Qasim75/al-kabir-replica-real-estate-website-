const express = require('express');
const router = express.Router();
const { login, getMe, changePassword } = require('../controllers/authController');
const { getDashboardStats } = require('../controllers/mainController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const { validate } = require('../middleware/validators');

router.post(
  '/login',
  [body('username').trim().notEmpty(), body('password').notEmpty()],
  validate,
  login
);
router.get('/me', protect, getMe);
router.put('/change-password', protect, changePassword);
router.get('/stats', protect, getDashboardStats);

module.exports = router;
