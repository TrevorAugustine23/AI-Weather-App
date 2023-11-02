const express = require('express');
const router = express.Router();

// mongoDB user model
const User = require('./../models/User');

// mongoDB user verification model
const UserVerification = require('./../models/UserVerification');

//email handler
const nodemailer = require("nodemailer");

//unique string
const {v4: uuidv4} = require("uuid");

//env variables
require("dotenv").config();

//Password Handler
const bcrypt = require('bcrypt');

//nodemailer stuff
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS,
    }
})

//testing success
transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready for messages");
        console.log(success);
    }
})

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
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid DOB entered"
        })
    } else if (password.length < 8){
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
            }else {
                //Try to create new user

                //Password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        name,
                        email,
                        password : hashedPassword,
                        dateOfBirth, 
                        verified: false,
                    });

                    newUser.save().then(result => {
                        //handle account verification
                        sendVerificationEmail(result, res);
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred saving user"
                        }) 
                    })
                })
                .catch(err=> {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while hashing password"
                    })
                })
            }   
    }).catch(err => {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred while checking for existing user",
            data: result,
            })
        })
    }
});

//send verification email
const sendVerificationEmail = ({_id, email}, res) => {
    //url to be used in the email
    const currentUrl = "http://localhost:8000/";

    const uniqueString = uuidv() + _id;

    //mail options
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify Your Email",
        html: `
        <html>
        <head>
            <title>Email Verification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333; text-align: center;">Email Verification</h1>
                <p>Hello there,</p>
                <p>Thank you for registering. To verify your email address, please click the button below:</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="${currentUrl}verify/${uniqueString}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
                </div>
                <p>If the button above does not work, you can copy and paste the following link into your browser:</p>
                <p>${currentUrl}verify/${uniqueString}</p>
                <p>Thank you!</p>
                <p> Press <a href${currentUrl + "user/verify" +_id + "/" +uniqueString}>here</a> to proceed</p> 
            </div>
        </body>
        </html>
    `
    };

    //hash the uniqueString
    const saltRounds = 10;
    bcrypt
        .hash(uniqueString, saltRounds)
        .then((hashedUniqueString) => {
            //set values in userVerification collection
            const newVerification = new UserVerification({
                userId: _id,
                uniqueString: hashedUniqueString,
                createdAt: Date.now(),
                expiresAt: Date.now() + 21600000,
            });

            newVerification
            .save()
            .then(() => {
                transporter
                .sendMail(mailOptions)
                .then(() => {
                    //email sent and verification records saved
                    res.json({
                        status: "PENDING",
                        message: "Verification email sent",
                    });
                })
                .catch((error) => {
                    res.json({
                        status: "FAILED",
                        message: "Verification email failed",
                    }); 
                })
            })
            .catch((error) => {
                console.log(error);
                res.json({
                    status: "FAILED",
                    message: "Unable to save verification email data",
                });
            })
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message:"An error occurred while hashing email data"
            })
        })
};
//Signin
router.post('/signin', (req, res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if(email == "" || password == "") {
        res.json({
            status: "FAILED",
            message:"Empty credentials supplied"
        })
    } else {
        //Check if user exists
        User.find({email})
        .then(data => {
            if(data.length) {
                //user exists

                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result) {
                        //password match
                        res.json({
                            status: "SUCCESS",
                            message: "Signin successful",
                            data: data
                        })
                    }else {
                        res.json({
                            status: "FAILED",
                            message:"Invalid password entered!"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status:"FAILED",
                        message: "An error occurred while comparing passwords"
                    })
                })
            } else {
                res.json({
                    status:"FAILED",
                    message:"Invalid credentials"
                })
            }
        })
        .catch(err=> {
            res.json({
                status: "FAILED",
                message: "An error occurred while accessing existing user "
            })
        })
    }
})

module.exports = router;