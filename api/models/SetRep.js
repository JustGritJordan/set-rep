const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SetRepSchema = new Schema({
    Text: {
        type: String,
        required: true
    },
    complete: {
        type:Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const SetRep = mongoose.model("SetRep", SetRepSchema);

module.exports = Todo;