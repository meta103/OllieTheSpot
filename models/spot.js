const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const spotSchema = new Schema({
  owner: { type: ObjectId, ref: 'User' },
  name: String,
  description: String,
  image: { type: String, default: 'https://www.skatescope.com/images/spots/59749165d9e3c.jpeg' },
  location: String,
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
