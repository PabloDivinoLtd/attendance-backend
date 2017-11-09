var express = require('express');
var router = express.Router();
var debug = require('debug')('Index');

router.get('/', (req, res, next) => {
    debug('Index Route');
    res.status(200).json({ "sucess": true });
});

router.use('/attendance-admin', require('./admin'))
router.use('/public', require('./public'))

module.exports = router;