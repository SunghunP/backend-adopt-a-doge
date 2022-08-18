const Doge = require('../../models/Doge');

module.exports = {
  delete: deleteDoge,
};

async function deleteDoge(req, res) {
  try {
    await Doge.findByIdAndDelete(req.params.id);
    res.redirect('/doge');
  } catch (err) {
    res.status(404).json(err);
  }
};