const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.createUser = (req, res, next) => {
	const user = new User({
		...req.body
	});
	user
		.save()
		.then(() => res.status(201).json({ message: 'User enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

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
		.then(() => res.status(200).json({ message: 'User modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
	User.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};




exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hash
        });
        user.save()
          .then(() => res.status(201).redirect('/index'))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
    .then (user => {
        if(!user) {
            return res.status(401).json({error: 'User not found'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then (valid =>{
            if (!valid) {
                return res.status(401).json({error: 'Wrong password'});
            }
            const token = jwt.sign(
                {userId: user._id},
                'RANDOM_TOKEN_SECRET',
                {expiresIn: '24h'}
                );
            res.cookie('token', token);
            res.status(200).redirect('/my-account');
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch (error => res.status(500).json({error}));
};