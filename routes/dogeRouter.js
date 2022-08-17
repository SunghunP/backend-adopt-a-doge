const express = require('express');
const router = express.Router();
const IndexCtrl = require('../controllers/DogeCtrl/Index');
const CreateCtrl = require('../controllers/DogeCtrl/Create');

router.get('/', IndexCtrl.index);
router.post('/', CreateCtrl.create);

module.exports = router;