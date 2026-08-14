const { body, validationResult } = require('express-validator');

// Runs after the field validators below and returns a clean 400 error
// instead of letting bad data reach the database.
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: errors.array().map((e) => e.msg).join(', '),
    });
  }
  next();
};

const contactRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('A valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

const paymentRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('A valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('projectName').trim().notEmpty().withMessage('Project name is required'),
  body('plotNumber').trim().notEmpty().withMessage('Plot number is required'),
  body('amount').isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
];

const adjustmentFormRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('A valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('projectName').trim().notEmpty().withMessage('Project name is required'),
  body('plotNumber').trim().notEmpty().withMessage('Plot number is required'),
  body('formType').trim().notEmpty().withMessage('Form type is required'),
];

const verificationRules = [
  body('registrationNumber').trim().notEmpty().withMessage('Registration number is required'),
  body('ownerName').trim().notEmpty().withMessage('Owner name is required'),
  body('projectName').trim().notEmpty().withMessage('Project name is required'),
];

const newsletterRules = [
  body('email').trim().isEmail().withMessage('A valid email is required'),
];

const callbackRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
];

module.exports = {
  validate,
  contactRules,
  paymentRules,
  adjustmentFormRules,
  verificationRules,
  newsletterRules,
  callbackRules,
};
