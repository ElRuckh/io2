const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index.js');
//path es la carpeta origen 
const path = require('path');


//Escuchar serivor
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

//base de datos conexion
mongoose.connect('mongodb+srv://Aaronadm:jsZqBjcdQlHOBHoO@cluster0.md3dq.mongodb.net/io?retryWrites=true&w=majority')
    .then(bd => console.log('BD se conecto')).catch(err => console.log(err));

//middleware: funcion que se ejecuta siempre que se realice una peticion
app.use(log('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

//RUTAS 
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('servidor funcionando en el puerto', app.get('port'))
});