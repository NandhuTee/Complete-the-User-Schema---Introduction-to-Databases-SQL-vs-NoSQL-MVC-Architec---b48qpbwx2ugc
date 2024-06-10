// Import the required dependencies
const mongoose = require('mongoose');
// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Adding a unique index to email
    match: [/.+@.+\..+/, 'Please enter a valid email address'] // Email validation
  },
  pswd: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['buyer', 'seller'], // Role can only be 'buyer' or 'seller'
    default: 'buyer' // Default role
  }
});
// Create and export the model
const User = mongoose.model('User',userSchema);
module.exports = User;
