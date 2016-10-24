var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cardSchema = new Schema({
    templatePath: {
        type: String,
        default: ''
    },
    cardDiv: {
        type: String,
        default: ''
    },
    soundPath: {
        type: String,
        default: ''
    },
    cardId: {
        type: String
    },
    cardFront: {
        type: String,
        default: ''
    },
    cardInterior: {
        type: String,
        default: ''
    }


});

mongoose.model('Card', cardSchema);
