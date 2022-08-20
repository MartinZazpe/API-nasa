var express = require('express')
var router = express.Router()

var indexController = require('../controllers/index.js')


/* GET home page. */
router.get('/', indexController.home)

router.get('/mars-images', indexController.marsRoverImages)


module.exports = router
