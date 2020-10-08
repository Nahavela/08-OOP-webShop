const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');


router.get('/',  userCtrl.getAllUser);
router.put('/:id',  userCtrl.modifyUser );
router.delete('/:id',  userCtrl.deleteUser );
router.get('/user/:id', userCtrl.getOneUser);





module.exports = router;