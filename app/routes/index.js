var express = require('express');
var ffdsf = express.Router();

/* GET home page. */
ffdsf.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = ffdsf;
