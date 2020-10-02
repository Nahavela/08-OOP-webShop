const express = require ('express');
//const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');
const app = express ();

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



app.post('/api/stuff', (req, res, next) => {
    const thing = new Thing({
    ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));
    });



module.exports = app;
