const express = require('express');
const router = express.Router();
const {
  submitContact,
  getContacts,
  deleteContact,
  submitPayment,
  getPayments,
  deletePayment,
  submitAdjustmentForm,
  getAdjustmentForms,
  deleteAdjustmentForm,
  verifyRegistration,
  createVerification,
  getVerifications,
  deleteVerification,
  subscribeNewsletter,
  getNewsletterSubscribers,
  deleteNewsletterSubscriber,
  submitCallback,
  getCallbacks,
  deleteCallback,
  updateCallbackStatus,
} = require('../controllers/mainController');

const { protect } = require('../middleware/authMiddleware');
const {
  validate,
  contactRules,
  paymentRules,
  adjustmentFormRules,
  verificationRules,
  newsletterRules,
  callbackRules,
} = require('../middleware/validators');

// Health check
router.get('/health', (req, res) => res.json({ success: true, status: 'ok' }));

// Contact Routes
router.post('/contact', contactRules, validate, submitContact);
router.get('/contact', protect, getContacts);
router.delete('/contact/:id', protect, deleteContact);

// Payment Routes
router.post('/payments', paymentRules, validate, submitPayment);
router.get('/payments', protect, getPayments);
router.delete('/payments/:id', protect, deletePayment);

// Adjustment Form Routes
router.post('/adjustment-forms', adjustmentFormRules, validate, submitAdjustmentForm);
router.get('/adjustment-forms', protect, getAdjustmentForms);
router.delete('/adjustment-forms/:id', protect, deleteAdjustmentForm);

// Verification Routes (public lookup by registration number, everything else protected)
router.get('/verify', protect, getVerifications);
router.get('/verify/:regNo', verifyRegistration);
router.post('/verify', verificationRules, validate, protect, createVerification);
router.delete('/verify/record/:id', protect, deleteVerification);

// Newsletter / "Register for News" Routes
router.post('/newsletter', newsletterRules, validate, subscribeNewsletter);
router.get('/newsletter', protect, getNewsletterSubscribers);
router.delete('/newsletter/:id', protect, deleteNewsletterSubscriber);

// Callback Request Routes
router.post('/callback', callbackRules, validate, submitCallback);
router.get('/callback', protect, getCallbacks);
router.patch('/callback/:id', protect, updateCallbackStatus);
router.delete('/callback/:id', protect, deleteCallback);

// Admin auth routes
router.use('/admin', require('./authRoutes'));

module.exports = router;
