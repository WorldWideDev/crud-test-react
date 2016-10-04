var mongoose = require('mongoose')
var User = mongoose.model('User')

var users = require('../controllers/users.js')

module.exports = function(app){
    app.get('/users/index', function(req,res){
        console.log('in user index routes');
        users.index(req,res)
    })
    app.post('/users/create', function(req,res){
        console.log('in user create routes');
        console.log(req.body.username + ' is post data in routes')
        users.create(req,res)
    })
    app.post('/users/delete', function(req,res){
        console.log('in user delete routes');
        users.delete(req,res)
    })
    app.post('/users/edit', function(req,res){
        console.log('in user edit routes');
        users.edit(req,res);
    })
}
