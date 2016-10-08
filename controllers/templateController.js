var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var conn = mongoose.connection;

exports.cardByID = function(req, res, next, id){

    Card.findOne({'cardId': id}).exec(function (err, card){
        if(err){
            return err;
        } else if (!card){
            return res.status(404).send({
                message: 'No card with that identifier has been found'
            })
        }
        req.card = card;
        next();
    })
}

exports.createCard = function(req, res){
    var cardId = createCardID();
    var userCard = new Card({
        cardText: "Hello World",
        templatePath: "/templates/birthdayTemplate.ejs",
        cardId: cardId
    });
    conn.collection("userCards").insert(userCard);
    userCard.save(function(err, data){
        if(err){
            console.log(err);
        }else{
            console.log("Card Added!");
        }
    })

}



function createCardID(){
    var funWords = ['Meow', 'Cat', 'Fish', 'Paws', 'Tails', 'Kitty', 'Chicken',
    'Cute', 'Cuddly', 'Furry', 'Love', 'Kitten', 'Ferocious', 'Floof', 'Fuzzy'];

    var cardID = "";
    for(var i = 0; i < 6; i++){
        cardID = cardID + funWords[Math.floor(Math.random() * funWords.length)]
    }
    console.log(cardID);
    return cardID;
}