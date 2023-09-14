const User = require('../model/user')

exports.createUser = (req,res)=> {
        const {Uname, email, password} = req.body;
        const newUser=  new User({
            Uname,
            email,
            password
        });
        res.send(newUser)
    }
