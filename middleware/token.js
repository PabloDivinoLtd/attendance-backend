var debug = require('debug')('middlewares');
var models = require('../models');
var constant = require('../constant');
var md5 = require('md5');

module.exports = function(req, res, next) {
    next();
}