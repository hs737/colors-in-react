var mongoose = require('mongoose')

var logger = require('./logger')
var CONSTANTS = require('./constants')

mongoose.connect(CONSTANTS.DB_URI, function(err) {
    logger.debug("Attempting to connect to " + CONSTANTS.DB_URI)
    if (err) {
        logger.error("DB CONNECTION FAILED:", err)
    } else {
        logger.debug("DB CONNECTION SUCCESS")
    }
})
