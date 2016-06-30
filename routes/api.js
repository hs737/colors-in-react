var express = require('express')
var router = express.Router()

var logger = require('../helpers/logger')
var ColorController = require('../controllers/ColorController')
var CONSTANTS = require('../helpers/constants')

router.use(function(req, res, next) {
    var resource = req.params.resource

    logger.debug(req.path, "called", req.method, resource)

    next()
})

router.get('/:resource', function(req,res, next) {
    var resource = req.params.resource

    ColorController.get(null, function(err, docs) {
        if (err) {
            logger.error("ColorController.get failed", err)
            res.json({
                code: CONSTANTS.RETURN_CODES.ERROR,
                message: err
            })
        } else {
            res.json({
                code: CONSTANTS.RETURN_CODES.SUCCESS,
                output: docs
            })
        }
    })
})

// router.post()

module.exports = router
