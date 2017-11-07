var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Working Index');
});

router.use('/attendance-admin', require('./admin'))
router.use('/public', require('./public'))

module.exports = router;