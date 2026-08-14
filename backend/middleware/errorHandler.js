// Wraps async route handlers so thrown errors are forwarded to the error middleware
// instead of crashing the process or leaving requests hanging.
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// 404 handler for unmatched API routes
const notFound = (req, res, next) => {
  res.status(404).json({ success: false, error: `Route not found: ${req.originalUrl}` });
};

// Central error handler - formats Mongoose validation errors nicely
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Server Error';

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map((val) => val.message).join(', ');
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    statusCode = 400;
    message = `Duplicate value for field: ${Object.keys(err.keyValue).join(', ')}`;
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    statusCode = 404;
    message = 'Resource not found';
  }

  res.status(statusCode).json({ success: false, error: message });
};

module.exports = { asyncHandler, notFound, errorHandler };
