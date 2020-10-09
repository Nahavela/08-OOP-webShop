const express = require('express');
const router = express.Router();
const Thing = require('../models/thing');
const shopCtrl = require('../controllers/shop');
const auth = require('../middleware/auth');



router.post('/', auth, shopCtrl.createThing);
router.get('/', auth, shopCtrl.getAllStuff);
router.get('/:id', auth, shopCtrl.getOneThing);
router.put('/:id', auth, shopCtrl.modifyThing );
router.delete('/:id', auth, shopCtrl.deleteThing );

module.exports = router;
