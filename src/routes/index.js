const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

//Funcion asincrona
//copn el await esperara valores
routes.get('/', async(req, res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs', {
        valores
    })

});
//
routes.post('/add', async(req, res) => {

    const valor = new Valor(req.body);
    await valor.save();

    res.redirect('/');

});


module.exports = routes;