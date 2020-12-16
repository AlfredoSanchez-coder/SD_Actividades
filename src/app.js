const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// conexion a base de datos de mongo
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db conectada'))
  .catch(err => console.log(err));

// importando rutas
const indexRoutes = require('./routes/index');

// configuracion del puerto
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`Servidor en el puerto ${app.get('port')}`);
});
