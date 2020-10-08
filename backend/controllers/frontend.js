const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');




exports.getHome = (req, res) => {res.render('pages/index', {menuId:'Home'})}
exports.getIndex = (req, res) => {res.render('pages/index', {menuId:'Home'})}
exports.getAbout = (req, res) => {res.render('pages/about', {page:'ABOUT US', menuId:'About Us'})}
exports.getGallery = (req, res) => {res.render('pages/gallery', {page: 'Services', menuId:'Gallery'})}
exports.getContact = (req, res) => {res.render('pages/contact-us', {page: 'Contact Us', menuId:'Contact Us'})}
exports.getAccount = (req, res) => {res.render('pages/my-account', {page: 'My account', menuId:'Shop'})}

exports.getSignUp = (req, res) => {res.render('pages/signUp', {page: 'SignUp', menuId:'Home'})}
exports.getLogin = (req, res) => {res.render('pages/login', {page: 'Login', menuId:'Home'})}
exports.getLogout = (req, res) => { res.clearCookie('token'); res.redirect('/'); };



exports.userInfoPage = async (req, res, next) => {
    try {
        //const token = req.headers.cookie.split('=')[1];
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();
        res.render('pages/userinfo',  {page: 'Info User', menuId:'Home', userInfo});
    } catch {

        res.status(401).json({error: 'Unauthenticated Request'});
    }
}

exports.getEditUser = async (req, res, next) => {
    try {
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();

        res.render('pages/edit-user', {page: 'Edit info', menuId:'Home', userInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }
};


exports.getEditPswd = async (req, res, next) => {
    try {
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        let url = `http://localhost:3000/api/user/user/${userId}`;

        myInit = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        let userInfo = await fetch(url, myInit);
        userInfo = await userInfo.json();

        res.render('pages/edit-pswd', {page: 'Edit pswd', menuId:'Home', userInfo});
    } catch {
        res.status(401).json({error: 'Unauthenticated Request'});
    }
};