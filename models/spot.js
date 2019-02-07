const mongoose = require('mongoose');

const ObjectId = Schema.Types.ObjectId;

const Schema = mongoose.Schema;

const spotSchema = new Schema({
  owner: { type: ObjectId, ref: 'User' },
  name: String,
  description: String,
  image: { type: String, default: 'no pic' },
  location: String,
});

const Spot = mongoose.model('User', spotSchema);

module.exports = Spot;
