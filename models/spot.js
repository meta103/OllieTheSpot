const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const spotSchema = new Schema({
  owner: { type: ObjectId, ref: 'User' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: 'https://www.skatescope.com/images/spots/59749165d9e3c.jpeg', required: true },
  city: { type: String, required: true, default: 'undefined' },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  }
});

const Spot = mongoose.model('Spot', spotSchema);

module.exports = Spot;
