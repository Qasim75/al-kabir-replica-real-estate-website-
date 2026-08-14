const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: [true, 'Please add a registration number'],
    unique: true,
  },
  ownerName: {
    type: String,
    required: [true, 'Please add owner name'],
  },
  projectName: {
    type: String,
    required: [true, 'Please add project name'],
  },
  plotSize: {
    type: String,
  },
  status: {
    type: String,
    default: 'Verified',
  },
  pdfUrl: {
    type: String,
    default: '/assets/pdf/Verification_Report.pdf',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Verification', verificationSchema);
