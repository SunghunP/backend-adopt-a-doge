const Doge = require('../../models/Doge');

module.exports = {
  update
};

async function update(req, res) {
  try {
    await Doge.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/doge");
  } catch (err) {
    res.status(404).json(err);
  }
};