const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
  },
  preferredTime: {
    type: String,
  },
  projectName: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'closed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Callback', callbackSchema);
