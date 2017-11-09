var express = require('express');
var router = express.Router();
var models = require('../../models');
var debug = require('debug')('admin');
var _ = require('underscore');
constant = require('../../constant');
var superAdminStatus = 10;

router.get('/a1', (req, res, next) => {
    res.json({ "success": true });
})

module.exports = router;