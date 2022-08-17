const express = require('express');
const router = express.Router();
const IndexCtrl = require('../controllers/DogeCtrl/Index');

router.get('/', IndexCtrl.index);

module.exports = router;