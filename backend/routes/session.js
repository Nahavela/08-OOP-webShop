const express = require('express');
const router = express.Router();
const sessionCtrl = require('../controllers/session');
const auth = require('../middleware/auth');




router.post('/signup', sessionCtrl.signup);
router.post('/login', sessionCtrl.login);

module.exports = router;