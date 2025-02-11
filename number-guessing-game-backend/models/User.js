const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  highScore: { type: Number, default: 0 },
}, { collection: 'use' }); // Specify the collection name

module.exports = mongoose.model('User', UserSchema);
