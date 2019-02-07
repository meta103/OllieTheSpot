const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  owner: String,
  name: String,
  description: String,
  image: { type: String, default: 'undefined' },
  location: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;