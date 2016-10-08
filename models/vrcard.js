var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    templatePath: {
        type: String,
        default: ''
    },
    cardText: {
        type: String,
        default: ''
    },
    soundPath: {
        type: String,
        default: ''
    },
    cardId: {
        type: String
    }

    
});

mongoose.model('Card', cardSchema);