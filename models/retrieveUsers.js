const mongoose = require('mongoose');

// Define the address schema
const addressSchema = new mongoose.Schema({
  city: String,
  country: String
});

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: addressSchema
}, { collection: 'user-info' }); // Specify the collection name as 'user-info'

// Create and export the User model
const UserInfo = mongoose.model('UserInfo', userSchema);
module.exports = UserInfo;
