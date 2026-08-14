// One-time setup script: creates (or resets the password of) the admin account
// used to log into the admin dashboard.
//
// Usage:
//   node seed/createAdmin.js <username> <password>
//
// Or set ADMIN_SEED_USERNAME / ADMIN_SEED_PASSWORD in backend/.env and run:
//   node seed/createAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const run = async () => {
  const username = process.argv[2] || process.env.ADMIN_SEED_USERNAME;
  const password = process.argv[3] || process.env.ADMIN_SEED_PASSWORD;

  if (!username || !password) {
    console.error('Usage: node seed/createAdmin.js <username> <password>');
    console.error('   (or set ADMIN_SEED_USERNAME / ADMIN_SEED_PASSWORD in .env)');
    process.exit(1);
  }
  if (password.length < 6) {
    console.error('Password must be at least 6 characters.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);

  let admin = await Admin.findOne({ username: username.toLowerCase() });
  if (admin) {
    admin.password = password; // pre('save') hook re-hashes it
    await admin.save();
    console.log(`✅ Password updated for existing admin "${username}".`);
  } else {
    admin = await Admin.create({ username: username.toLowerCase(), password });
    console.log(`✅ Admin account "${username}" created.`);
  }

  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error('Failed to seed admin:', err.message);
  process.exit(1);
});
