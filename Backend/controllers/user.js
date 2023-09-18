const User = require('../model/user');
const VerificationToken = require('../model/verificationToken');

const { sendError } = require('../utilities/helper');
const jwt = require('jsonwebtoken');
const { generateOTP, mailTransport } = require('../utilities/mail');
const { isValidObjectId } = require('mongoose');
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

       mailTransport().sendMail({
        from:'emailverification@email.com',
        to: newUser.email,
        subject:'Verify your email account',
        html:`<h1>${OTP}</h1>`
       });

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

exports.verifyEmail = async (req, res) => {
    const {userId, otp} = req.body
    if(!userId || !otp.trim()) return sendError(res, 'Invalid request, missing parameters!')

    if(!isValidObjectId(userId)) return sendError(res, 'Invalid userId!')

    const user = await User.findById(userId)
    if(!user) return sendError(res, 'Sorry, user not found')

    if(user.verified) return sendError(res, 'This account is already verified')

    const token = await VerificationToken.findOne({owner: user._id})
    if(!token) return sendError(res, 'Sorry user not found!')

    const isMatched = await token.compareToken(otp)
    if(!isMatched) return sendError(res, 'Please provide a valid token')

    user.verified =  true;

    await VerificationToken.findByIdAndDelete(token._id);
    await user.save()

    res.json({success: true, message: "Your email is verified", user: {Uname:user.Uname, email:user.email, id:user._id}})

};