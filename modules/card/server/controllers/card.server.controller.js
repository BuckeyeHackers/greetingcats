var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var conn = mongoose.connection;
var qr = require('qr-image');
var fs = require('fs');
var webshot = require('webshot');
var mkdirp = require('mkdirp');

var webshotOptions = {
    siteType: 'html',
    shotSize: {
        width: 'all',
        height: 'all'
    }
}

exports.cardByID = function (req, res, next, id) {

    Card.findOne({ 'cardId': id }).exec(function (err, card) {
        if (err) {
            return err;
        } else if (!card) {
            return res.status(404).send({
                message: 'No card with that identifier has been found'
            })
        }
        console.log(card);
        req.card = card;
        req.card.cardDiv = card.cardDiv;
        req.card.cardFrontURL = 'cards/' + card.cardId + '/cardFront.png';
        req.card.cardInteriorURL = 'cards/' + card.cardId + '/cardInterior.png';
        next();
    })
}

exports.cardCreator = function (req, res) {
    res.render(app.card.dirname + "/public/views/create.html");
}

exports.createCard = function (req, res) {
    var cardId = createCardID();
    console.log(req.body);
    
    var userCard = new Card({
        cardFront: req.body.cardFront,
        cardInterior: req.body.cardInterior,
        templatePath: "/templates/birthdayTemplate.ejs",
        cardId: cardId
    });
    mkdirp('./modules/card/public/assets/cards/' + userCard.cardId, function (err) {
        if (err) {
            console.log("Error in creating directory");
        } else {
            createCardTextures(userCard);
        }

    })
    conn.collection("userCards").insert(userCard);
    userCard.save(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Card Added!");
        }
    })
    

    res.send(cardId);

}



function createCardID() {
    var funWords = ['Meow', 'Cat', 'Fish', 'Paws', 'Tail',
        'Cute', 'Fur', 'Love', 'Claw', 'Lion', 'Puma', 'Mice', 'Joy', 'Yarn',
        'Paw', 'Leap', 'Milk', 'Barn', 'Cool', 'Fat', 'Bird', 'Jump', 'Play', 'Hunt'];

    var cardID = "";
    for (var i = 0; i < 3; i++) {
        cardID = cardID + funWords[Math.floor(Math.random() * funWords.length)]
    }
    console.log(cardID);
    return cardID;
}

function createCardTextures(card) {
    webshot('<html>' + card.cardFront + '</html>', './modules/card/public/assets/cards/' + card.cardId + '/' + 'cardFront.png', webshotOptions, function (err) {
        if (err) {
            console.log("Something went wrong with webshot!");
        } else {
            console.log("Card Front saved!");
        }
    })

    webshot('<html>' + card.cardInterior + '</html>', './modules/card/public/assets/cards/' + card.cardId + '/' + 'cardInterior.png', webshotOptions, function (err) {
        if (err) {
            console.log("Something went wrong with webshot!");
        } else {
            console.log("Card Interior saved!");
        }
    })
}

