const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  image: { type: String, default: 'undefined' },
  bio: { type: String, default: 'undefined' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
