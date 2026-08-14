const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { asyncHandler } = require('./errorHandler');

const generateToken = (adminId) => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// Protects admin dashboard routes. Accepts a JWT in the Authorization header
// (issued by POST /api/admin/login) OR, for scripted/API access, an x-api-key
// header matching ADMIN_API_KEY. Either is sufficient.
const protect = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  // Fallback: allow the simple API key for non-browser/API clients
  const providedKey = req.headers['x-api-key'];
  if (!token && providedKey && process.env.ADMIN_API_KEY && providedKey === process.env.ADMIN_API_KEY) {
    return next();
  }

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) {
      return res.status(401).json({ success: false, error: 'Not authorized, admin no longer exists' });
    }
    req.admin = admin;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Not authorized, invalid or expired token' });
  }
});

module.exports = { protect, generateToken };
