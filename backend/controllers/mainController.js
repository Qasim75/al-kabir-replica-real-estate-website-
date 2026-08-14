const Contact = require('../models/Contact');
const Payment = require('../models/Payment');
const AdjustmentForm = require('../models/AdjustmentForm');
const Verification = require('../models/Verification');
const Newsletter = require('../models/Newsletter');
const Callback = require('../models/Callback');
const { asyncHandler } = require('../middleware/errorHandler');

// @desc    Submit contact form
// @route   POST /api/contact
exports.submitContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({ success: true, data: contact });
});

// @desc    Get all contacts (protected - requires x-api-key)
// @route   GET /api/contact
exports.getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: contacts.length, data: contacts });
});

// @desc    Submit payment request
// @route   POST /api/payments
exports.submitPayment = asyncHandler(async (req, res) => {
  const payment = await Payment.create(req.body);
  res.status(201).json({ success: true, data: payment });
});

// @desc    Get all payments (protected - requires x-api-key)
// @route   GET /api/payments
exports.getPayments = asyncHandler(async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: payments.length, data: payments });
});

// @desc    Submit adjustment form
// @route   POST /api/adjustment-forms
exports.submitAdjustmentForm = asyncHandler(async (req, res) => {
  const form = await AdjustmentForm.create(req.body);
  res.status(201).json({ success: true, data: form });
});

// @desc    Get all adjustment forms (protected - requires x-api-key)
// @route   GET /api/adjustment-forms
exports.getAdjustmentForms = asyncHandler(async (req, res) => {
  const forms = await AdjustmentForm.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: forms.length, data: forms });
});

// @desc    Verify registration number
// @route   GET /api/verify/:regNo
exports.verifyRegistration = asyncHandler(async (req, res) => {
  const verification = await Verification.findOne({ registrationNumber: req.params.regNo });
  if (!verification) {
    return res.status(404).json({ success: false, error: 'No record found' });
  }
  res.status(200).json({ success: true, data: verification });
});

// @desc    Create verification record (protected - requires x-api-key)
// @route   POST /api/verify
exports.createVerification = asyncHandler(async (req, res) => {
  const verification = await Verification.create(req.body);
  res.status(201).json({ success: true, data: verification });
});

// @desc    Subscribe to newsletter / register for news
// @route   POST /api/newsletter
exports.subscribeNewsletter = asyncHandler(async (req, res) => {
  const existing = await Newsletter.findOne({ email: req.body.email });
  if (existing) {
    return res.status(200).json({ success: true, message: 'Already subscribed', data: existing });
  }
  const subscriber = await Newsletter.create(req.body);
  res.status(201).json({ success: true, data: subscriber });
});

// @desc    Get all newsletter subscribers (protected - requires x-api-key)
// @route   GET /api/newsletter
exports.getNewsletterSubscribers = asyncHandler(async (req, res) => {
  const subscribers = await Newsletter.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: subscribers.length, data: subscribers });
});

// @desc    Submit a callback request
// @route   POST /api/callback
exports.submitCallback = asyncHandler(async (req, res) => {
  const callback = await Callback.create(req.body);
  res.status(201).json({ success: true, data: callback });
});

// @desc    Get all callback requests (protected)
// @route   GET /api/callback
exports.getCallbacks = asyncHandler(async (req, res) => {
  const callbacks = await Callback.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: callbacks.length, data: callbacks });
});

// @desc    Delete a callback request (protected)
// @route   DELETE /api/callback/:id
exports.deleteCallback = asyncHandler(async (req, res) => {
  const callback = await Callback.findByIdAndDelete(req.params.id);
  if (!callback) return res.status(404).json({ success: false, error: 'Callback not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Update a callback request's status (protected)
// @route   PATCH /api/callback/:id
exports.updateCallbackStatus = asyncHandler(async (req, res) => {
  const callback = await Callback.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );
  if (!callback) return res.status(404).json({ success: false, error: 'Callback not found' });
  res.status(200).json({ success: true, data: callback });
});

// @desc    Delete a contact submission (protected)
// @route   DELETE /api/contact/:id
exports.deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).json({ success: false, error: 'Contact not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Delete a payment submission (protected)
// @route   DELETE /api/payments/:id
exports.deletePayment = asyncHandler(async (req, res) => {
  const payment = await Payment.findByIdAndDelete(req.params.id);
  if (!payment) return res.status(404).json({ success: false, error: 'Payment not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Delete an adjustment form submission (protected)
// @route   DELETE /api/adjustment-forms/:id
exports.deleteAdjustmentForm = asyncHandler(async (req, res) => {
  const form = await AdjustmentForm.findByIdAndDelete(req.params.id);
  if (!form) return res.status(404).json({ success: false, error: 'Adjustment form not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Delete a newsletter subscriber (protected)
// @route   DELETE /api/newsletter/:id
exports.deleteNewsletterSubscriber = asyncHandler(async (req, res) => {
  const subscriber = await Newsletter.findByIdAndDelete(req.params.id);
  if (!subscriber) return res.status(404).json({ success: false, error: 'Subscriber not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Get all verification records (protected)
// @route   GET /api/verify
exports.getVerifications = asyncHandler(async (req, res) => {
  const verifications = await Verification.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, count: verifications.length, data: verifications });
});

// @desc    Delete a verification record (protected)
// @route   DELETE /api/verify/record/:id
exports.deleteVerification = asyncHandler(async (req, res) => {
  const verification = await Verification.findByIdAndDelete(req.params.id);
  if (!verification) return res.status(404).json({ success: false, error: 'Verification record not found' });
  res.status(200).json({ success: true, data: {} });
});

// @desc    Dashboard summary counts (protected)
// @route   GET /api/admin/stats
exports.getDashboardStats = asyncHandler(async (req, res) => {
  const [contacts, payments, adjustmentForms, verifications, newsletter, callbacks] = await Promise.all([
    Contact.countDocuments(),
    Payment.countDocuments(),
    AdjustmentForm.countDocuments(),
    Verification.countDocuments(),
    Newsletter.countDocuments(),
    Callback.countDocuments(),
  ]);
  res.status(200).json({
    success: true,
    data: { contacts, payments, adjustmentForms, verifications, newsletter, callbacks },
  });
});
