require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db
  .on('connected', () => {
    console.log(`Connected to ${db.host}:${db.port}`)
  })
  .on('disconnected', ()=> {
    console.log('Mongoose has disconnected from the Database...')
  })
  .on('error', (error) => {
    console.log(error)
  });

module.exports = db;