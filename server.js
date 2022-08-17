require('dotenv').config();
require('./connection/db');

// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3232;

app.use(cors());
app.use(express.json());

// const dogeRouter = require('./routes/dogeRouter');
// app.use('/doge', dogeRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
})
