const User = require('../model/user')

exports.createUser = async (req,res)=> {
        const {Uname, email, password} = req.body;
        const user = await User.find({email})
        if (user) res. status(400).json({success: false, error:'This email already exists'})
        const newUser=  new User({
            Uname,
            email,
            password
        });
       await newUser.save()
        res.send(newUser)
    }
