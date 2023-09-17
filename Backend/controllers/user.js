const User = require('../model/user');
const VerificationToken = require('../model/verificationToken');

const { sendError } = require('../utilities/helper');
const jwt = require('jsonwebtoken');
const { generateOTP } = require('../utilities/mail');
exports.createUser = async (req,res)=> {
        const {Uname, email, password} = req.body;
        const user = await User.findOne({email})
        
        if (user) 
        return sendError(res, "This email already exists!")
        
        const newUser=  new User({
            Uname,
            email,
            password
        });
       const OTP = generateOTP() 
       const verificationToken = new VerificationToken({
        owner: newUser._id,
        token:OTP
       })

       await verificationToken.save()
       await newUser.save()
        res.send(newUser)
    };
exports.signin = async (req, res) => {
    const {email,password} =  req.body;
    if(!email.trim() || !password.trim())
    return sendError(res, "Email/Password is missing")

    const user = await User.findOne({email})    
    if(!user) return sendError(res, "User not found!")

    const isMatched = await user.comparePassword(password)
    if(!isMatched) return sendError(res, "email/password does not match!")

    const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {
        // expiresIn:
    })
    res.json({
        success: true,
        user: {Uname:user.Uname, email:user.email, id:user._id, token},
    });
};