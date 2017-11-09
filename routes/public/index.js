var express = require('express');
var router = express.Router();
var models = require('../../models');
var debug = require('debug')('public');
var _ = require('underscore');
constant = require('../../constant');

router.get('/p1', (req, res, next) => {
    res.json({ "success": true });
})

module.exports = router;