const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spotSchema = new Schema({
  owner: String,
  name: String,
  description: String,
  image: { type: String, default: 'no pic' },
  location: String,
});

const Spot = mongoose.model('User', spotSchema);

module.exports = Spot;
