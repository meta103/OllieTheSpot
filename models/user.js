const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  image: { type: String, default: 'https://res.cloudinary.com/ollie-the-spot/image/upload/v1549985406/profile-picture-default.jpg' },
  bio: { type: String, default: 'no bio' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
