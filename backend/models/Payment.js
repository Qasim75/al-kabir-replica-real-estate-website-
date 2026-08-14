const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
  },
  projectName: {
    type: String,
    required: [true, 'Please add a project name'],
  },
  plotNumber: {
    type: String,
    required: [true, 'Please add a plot number'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  paymentMethod: {
    type: String,
    default: 'credit-card',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
