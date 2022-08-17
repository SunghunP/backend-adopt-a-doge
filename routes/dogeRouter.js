const express = require('express');
const router = express.Router();
const IndexCtrl = require('../controllers/DogeCtrl/Index');
const CreateCtrl = require('../controllers/DogeCtrl/Create');
const UpdateCtrl = require('../controllers/DogeCtrl/Update');
const DeleteCtrl = require('../controllers/DogeCtrl/Delete');

router.get('/', IndexCtrl.index);
router.post('/', CreateCtrl.create);
router.put('/:id', UpdateCtrl.update);
router.delete('/:id', DeleteCtrl.delete);

module.exports = router;