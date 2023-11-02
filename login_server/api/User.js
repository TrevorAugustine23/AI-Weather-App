const express = require('express');
const router = express.Router();

// mongoDB user model
const User = require('./../models/User');

//Signup
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    }else if (!/^[a-zA-Z]*$/.test(name)){
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    }else if (!/^[\w-\.]+@([\w-]+\.)+[w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    }else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid DOB entered"
        })
    }else if (password.length < 8){
        res.json({
            status: "FAILED",
            message: "Password is too short"
        })
    } else {
        //Checking if user already exists
        User.find({email}).then(result => {
            if (result.length) {
                //A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })

            }
         
    }).catch(err => {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred while checking for existing user"
            })
        })
    }
})
//Signin
router.post('/signup', (req, res) => {

})

module.exports = router;