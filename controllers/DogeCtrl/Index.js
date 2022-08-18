const Doge = require('../../models/doge');

module.exports = {index};

async function index(req, res) {
  try {
    let allDoge = await Doge.find({});
    res.json(allDoge);
  } catch (err) {
    res.status(400).json(err);
  }
};