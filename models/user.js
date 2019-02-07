const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
  image: { type: String, default: 'no pic' },
  bio: { type: String, default: 'no bio' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
