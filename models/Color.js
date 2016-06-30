var mongoose = require('mongoose')

var ColorSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    red: {type: Number, default: 0},
    green: {type: Number, default: 0},
    blue: {type: Number, default: 0},
})

module.exports = mongoose.model('ColorSchema', ColorSchema)
