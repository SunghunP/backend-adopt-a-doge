const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dogeSchema = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  breed: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  desc: { type: String, maxLength: 500 },
  adopted: { type: Boolean, default: false }
});

const Doge = model("Doge", dogeSchema);

module.exports = Doge;