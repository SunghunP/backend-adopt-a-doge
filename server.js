require('dotenv').config();
require('./connection/db');

// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res)=> {
  res.send("Home page for Doge")
})

const dogeRouter = require('./routes/dogeRouter');
app.use('/doge', dogeRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`)
});
