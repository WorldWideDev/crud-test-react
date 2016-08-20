var express = require('express');
var app = express();
app.use(express.static(__dirname+'/node_modules'));
app.use(express.static(__dirname+'/client'));

var server = app.listen(3030, function(){
	console.log('its the year 3030')
})
