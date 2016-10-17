var cardModel = require('./server/models/card.server.model');
var routes = require('./server/routes/card.server.routes');
var express = require('express');

module.exports = function(app){
    app.cards = {};
    app.cards.dirname = __dirname;
    app.use('/card', express.static( __dirname + "/public/assets"))
    routes.init(app);
}