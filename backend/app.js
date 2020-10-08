const express = require ('express');
//const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const app = express (); 

const shopRoutes = require('./routes/shop');
const pageRoutes = require('./routes/frontend');
const userRoutes = require('./routes/user');
const sessionRoutes = require('./routes/session')

const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");

//let path = require('path');
mongoose.set('useCreateIndex', true);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));


// Connection BD
mongoose.connect('mongodb+srv://user:A6ugi9GkeMK4FuZd@cluster0.ra4ue.gcp.mongodb.net/freshshop?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use ((req, res, next) => {
  res.setHeader ('Access-Control-Allow-Origin', '*');
  res.setHeader (
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader (
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next ();
});
  

app.use(methodOverride("_method"));


// app.use (bodyParser.json ());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Vers ROUTES
app.use('/api/shop', shopRoutes);
app.use('/api/user', userRoutes);
app.use('/', pageRoutes);
app.use('/session', sessionRoutes);



module.exports = app;
