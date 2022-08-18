const Doge = require('../../models/Doge');

module.exports = {create};

async function create(req, res) {
  try {
    res.json(await Doge.create(req.body))
  } catch(error) {
    res.status(400).json(error)
  }
};