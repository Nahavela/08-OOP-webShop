const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');



exports.getAllUser = (req, res, next) => {
    User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyUser = (req, res, next) => {
	User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => {
            res.status(200).redirect('/userinfo');
        }
        
        )
        
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
	User.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};









//exports.getEditUser = (req, res) => {res.render('pages/edit-user', {page: 'Edit info', menuId:'Home'})}
//exports.getUserInfo = (req, res) => {res.render('pages/userinfo', {page: 'Edit info', menuId:'Home'})}