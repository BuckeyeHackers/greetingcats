var cards = require("../controllers/card.server.controller");


exports.init = function (app) {
    app.post('/card/create', cards.createCard);

    app.get('/card/:cardId', function (req, res) {
        var cardData = {
            cardDiv: req.card.cardDiv,
            cardSoundURL: req.card.cardSoundURL
        }
        console.log("Card Rendered!");
        res.render(app.cards.dirname + "/public/views/genericTemplate.ejs", cardData);

    });

    app.param('cardId', cards.cardByID);
}