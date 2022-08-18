const Doge = require('../../models/Doge');

module.exports = {read};

async function read(req, res) {
  try {
    doge = await Doge.findById(req.params.id)
    res.json(doge)
  } catch (err) {
    res.status(400).json(err);
  }
}