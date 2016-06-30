var express = require('express');
var  to= express.Router();

/* GET users listing. */
to.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

to.get("/first",function(req,res,next){
	var aks="fjf"
})
module.exports = to;
