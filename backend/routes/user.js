const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/', auth, userCtrl.createUser);
router.get('/', auth, userCtrl.getAllUser);
router.get('/:id', auth, userCtrl.getOneUser);
router.put('/:id', auth, userCtrl.modifyUser );
router.delete('/:id', auth, userCtrl.deleteUser );

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;