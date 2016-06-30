var express = require('express');
var sfsfs = express.Router();

/* GET home page. */
sfsfs.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = sfsfs;
