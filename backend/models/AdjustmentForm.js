const mongoose = require('mongoose');

const adjustmentFormSchema = new mongoose.Schema({
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
  formType: {
    type: String,
    required: [true, 'Please add a form type'],
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AdjustmentForm', adjustmentFormSchema);
