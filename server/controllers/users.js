var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
    return {
        index: function(req,res){
			User.find({}, function (err,users){
                console.log(users, 'are all users')
				if(err){
					res.json(err);
				}else{
					res.json(users);
				}
			})
			console.log('in user index controller')
		},
        create: function(req,res){
            User.findOne({username: req.body.username}, function(err, user){
                if(err){

                    res.json(err);
                }else{
                    if(user){
                        console.log(user, 'is found user');
                        res.json(user)
                    }else{
                        var new_user = new User({
                            username: req.body.username
                        })
                        new_user.save(function(err){
                            if(err){
                                console.log('somethings amiss');
                                err.errors.username.message = 'Username field cannot be blank'
                                res.json(err)
                            }else{
                                console.log('added a user');
                                res.redirect('/users/index')
                            }
                        })
                    }
                }
            })
        },
        delete: function(req,res){
            User.remove({username: req.body.username}, function(err){
                if(err){
                    res.json(err)
                }else{
                    res.redirect('/users/index')
                }
            })
        },
        edit: function(req,res){
            console.log(req.body.oldUsername, req.body.newUsername);
            User.findOne({username:req.body.oldUsername}, function(err, user){
                if(err){
                    res.json(err)
                }else{
                    user.username = req.body.newUsername
                    user.save()
                    res.redirect('/users/index')
                }
            })
        }
    }
})()
