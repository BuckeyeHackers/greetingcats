var cardModel = require('./server/models/card.server.model');

var routes = require('./server/routes/card.server.routes');

module.exports = function(app){
    app.cards = {};
    app.cards.dirname = __dirname;
    routes.init(app);
}