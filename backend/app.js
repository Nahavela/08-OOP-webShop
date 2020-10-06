const express = require ('express');
//const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const app = express (); 
const stuffRoutes = require('./routes/stuff');
const pageRoutes = require('./routes/frontend');
const userRoutes = require('./routes/user');
const cookieParser = require('cookie-parser')
//let path = require('path');
mongoose.set('useCreateIndex', true);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));



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
  
//app.use (bodyParser.json ());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/', pageRoutes);

app.get('/',function (req, res) {
  res.render('pages/index', {menuId:'Home'})
});

module.exports = app;
