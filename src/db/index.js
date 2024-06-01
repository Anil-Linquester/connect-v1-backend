const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://anilkumarlinquester:Anil%401678@cluster0.opz2vng.mongodb.net/mydatabase';

mongoose.connect(mongoURI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('connection error:', err));

module.exports = mongoose.connection;
