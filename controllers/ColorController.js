var Color = require('../models/Color')
var logger = require('../helpers/logger')

var FILE = 'ColorController'

module.exports = {
    get: function(params, callback) {
        var debugData = ": " + JSON.stringify(params) + ": "
        logger.debug(FILE, "called 'get'", debugData)

        Color.find(params, function(err, docs) {
            if (callback == null) {
                return
            }

            if (err) {
                logger.error(FILE, debugData, "Error calling 'find' on Color", err)
                callback(err, null)
            } else {
                callback(null, docs)
            }
        })
    },
    create: function(params, callback) {
        var debugData = ": " + JSON.stringify(params) + ": "
        logger.debug(FILE, "called 'create'", debugData)

        Color.create(params, function(err, doc) {
            if (callback == null) {
                return
            }

            if (err) {
                logger.error(FILE, debugData, "Error calling 'find' on Color", err)
                callback(err, null)
            } else {
                callback(null, doc)
            }
        })
    }
}
