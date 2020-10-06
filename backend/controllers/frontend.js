
exports.getIndex = (req, res) => {res.render('pages/index', {menuId:'Home'})}
exports.getAbout = (req, res) => {res.render('pages/about', {page:'ABOUT US', menuId:'About Us'})}
exports.getCart = (req, res) => {res.render('pages/cart', {page: 'Cart', menuId:'Shop'})}
exports.getCheckout = (req, res) => {res.render('pages/checkout', {page: 'Checkout', menuId:'Shop'})}
exports.getContact = (req, res) => {res.render('pages/contact-us', {page: 'Contact Us', menuId:'Contact Us'})}
exports.getGallery = (req, res) => {res.render('pages/gallery', {page: 'Services', menuId:'Gallery'})}
exports.getAccount = (req, res) => {res.render('pages/my-account', {page: 'My account', menuId:'Shop'})}
exports.getDetail = (req, res) => {res.render('pages/shop-detail', {page: 'Shop Detail', menuId:'Shop'})}
exports.getShop = (req, res) => {res.render('pages/shop', {page: 'Shop', menuId:'Shop'})}
exports.getWishlist = (req, res) => {res.render('pages/wishlist', {page: 'Wishlist', menuId:'Shop'})}
exports.getSignUp = (req, res) => {res.render('pages/signUp', {page: 'SignUp', menuId:'Home'})}
exports.getLogin = (req, res) => {res.render('pages/login', {page: 'Login', menuId:'Home'})}