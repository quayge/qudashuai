var express = require('express');
var  ro= express.Router();

/* GET users listing. */
ro.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

ro.get("/first",function(req,res,next){
	var aks="fjf"
})
module.exports = ro;
