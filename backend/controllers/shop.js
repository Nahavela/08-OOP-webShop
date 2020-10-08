const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
	const thing = new Thing({
		...req.body
	});
	thing
		.save()
		.then(() => res.status(201).json({ message: 'Objet enregistré !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getAllStuff = (req, res, next) => {
    Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
	Thing.findOne({ _id: req.params.id })
		.then((thing) => res.status(200).json(thing))
		.catch((error) => res.status(404).json({ error }));
};

exports.modifyThing = (req, res, next) => {
	Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet modifié !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
	Thing.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: 'Objet supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getCart = (req, res) => {res.render('pages/cart', {page: 'Cart', menuId:'Shop'})}
exports.getCheckout = (req, res) => {res.render('pages/checkout', {page: 'Checkout', menuId:'Shop'})}
exports.getDetail = (req, res) => {res.render('pages/shop-detail', {page: 'Shop Detail', menuId:'Shop'})}
exports.getShop = (req, res) => {res.render('pages/shop', {page: 'Shop', menuId:'Shop'})}
exports.getWishlist = (req, res) => {res.render('pages/wishlist', {page: 'Wishlist', menuId:'Shop'})}



