const express = require('express');
const router = express.Router();
const pageCtrl = require('../controllers/frontend');
const auth = require('../middleware/auth');

router.get('/index', pageCtrl.getIndex);
router.get('/about', pageCtrl.getAbout);
router.get('/cart', pageCtrl.getCart);
router.get('/checkout', pageCtrl.getCheckout);
router.get('/contact-us', pageCtrl.getContact);
router.get('/gallery', pageCtrl.getGallery);
router.get('/my-account', auth, pageCtrl.getAccount);
router.get('/shop-detail', pageCtrl.getDetail);
router.get('/shop', pageCtrl.getShop);
router.get('/wishlist', pageCtrl.getWishlist);
router.get('/signUp', pageCtrl.getSignUp);
router.get('/login', pageCtrl.getLogin);

module.exports = router;