const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

const userArray = [
  {
    username: 'marcos',
    password: 'Actor',
    catchPhrase: 'I’ll be back',
  },
  {
    name: 'Britney Spears',
    occupation: 'Singer',
    catchPhrase: 'The older I get the more I understand Britney’s 2007 meltdown',
  },
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('DB conected');
    return User.create(userArray);
  }).then(() => {
    mongoose.connection.close();
  }).catch((error) => {
    console.log(error);
  });
