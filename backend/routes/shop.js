const express = require('express');
const router = express.Router();
const Thing = require('../models/thing');
const shopCtrl = require('../controllers/shop');
const auth = require('../middleware/auth');

router.get('/cart', shopCtrl.getCart);
router.get('/checkout', shopCtrl.getCheckout);
router.get('/shop-detail', shopCtrl.getDetail);
router.get('/shop', shopCtrl.getShop);
router.get('/wishlist', shopCtrl.getWishlist);

router.post('/', auth, shopCtrl.createThing);
router.get('/', auth, shopCtrl.getAllStuff);
router.get('/:id', auth, shopCtrl.getOneThing);
router.put('/:id', auth, shopCtrl.modifyThing );
router.delete('/:id', auth, shopCtrl.deleteThing );

module.exports = router;
