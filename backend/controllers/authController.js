const Admin = require('../models/Admin');
const { generateToken } = require('../middleware/authMiddleware');
const { asyncHandler } = require('../middleware/errorHandler');

// @desc    Log in an admin
// @route   POST /api/admin/login
exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Username and password are required' });
  }

  const admin = await Admin.findOne({ username: username.toLowerCase() }).select('+password');
  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(401).json({ success: false, error: 'Invalid username or password' });
  }

  res.status(200).json({
    success: true,
    token: generateToken(admin._id),
    admin: { id: admin._id, username: admin.username },
  });
});

// @desc    Get the currently logged-in admin
// @route   GET /api/admin/me
exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, admin: { id: req.admin._id, username: req.admin.username } });
});

// @desc    Change the logged-in admin's password
// @route   PUT /api/admin/change-password
exports.changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ success: false, error: 'Current and new password are required' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ success: false, error: 'New password must be at least 6 characters' });
  }

  const admin = await Admin.findById(req.admin._id).select('+password');
  if (!(await admin.matchPassword(currentPassword))) {
    return res.status(401).json({ success: false, error: 'Current password is incorrect' });
  }

  admin.password = newPassword;
  await admin.save();

  res.status(200).json({ success: true, message: 'Password updated successfully' });
});
