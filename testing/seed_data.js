const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

const testData = {
  contacts: [
    { name: 'John Doe', email: 'john@example.com', message: 'Interested in Phase 2 plots.' },
    { name: 'Jane Smith', email: 'jane@example.com', message: 'Need information about payment plans.' }
  ],
  payments: [
    { name: 'Ali Khan', email: 'ali@example.com', phone: '03001234567', projectName: 'Al Kabir Town Phase II', plotNumber: 'B-45', amount: 50000, paymentMethod: 'bank-transfer' },
    { name: 'Sara Ahmed', email: 'sara@example.com', phone: '03219876543', projectName: 'Kings Town Phase I', plotNumber: 'A-12', amount: 75000, paymentMethod: 'credit-card' }
  ],
  verifications: [
    { registrationNumber: 'AKD-99887', ownerName: 'Muhammad Usman', projectName: 'Al-Kabir Downtown', plotSize: '5 Marla', status: 'Verified' }
  ]
};

async function seed() {
  console.log('Starting data seeding...');
  
  try {
    for (const contact of testData.contacts) {
      await axios.post(`${API_URL}/contact`, contact);
      console.log(`Added contact: ${contact.name}`);
    }
    
    for (const payment of testData.payments) {
      await axios.post(`${API_URL}/payments`, payment);
      console.log(`Added payment: ${payment.name}`);
    }
    
    for (const verification of testData.verifications) {
      await axios.post(`${API_URL}/verify`, verification);
      console.log(`Added verification: ${verification.registrationNumber}`);
    }
    
    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error.message);
    console.log('Make sure the backend server is running on http://localhost:5000');
  }
}

seed();
