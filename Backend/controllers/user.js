const User = require('../model/user');
const VerificationToken = require('../model/verificationToken');
const ResetToken = require('../model/resetToken');
const { sendError, createRandomBytes } = require('../utilities/helper');
const crypto = require('crypto');

const jwt = require('jsonwebtoken');
const { generateOTP, mailTransport, generatePasswordResetTemplate } = require('../utilities/mail');
const { isValidObjectId } = require('mongoose');
const { url } = require('inspector');
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

exports.forgotPassword = async (req, res) => {
    const {email} = req.body;
    if(!email) return sendError(res, 'Please provide a valid email!')

    const user = await User.findOne({email});
    if(!user) return sendError(res, 'User not found!');

    const token = await ResetToken.findOne({owner: user._id})
    if(token) return sendError(res, 'You can only get another token after 1 hour!');

    const randomBytes = await createRandomBytes()
    const resetToken = new ResetToken({owner: user._id, token: randomBytes})
    await resetToken.save();

    mailTransport().sendMail({
        from:'security@email.com',
        to: user.email,
        subject:'Password reset',
        html:generatePasswordResetTemplate(`http://localhost:3000/reset-password?token=${randomBytes}&id=${user._id}`),
       });

    res.json({success:true, message: 'Password reset link is sent to your email'});

}

exports.resetPassword = async (req, res) => {
    const {password} = req.body;

    const user = await User.findById(req.user);
    if(!user) return sendError(res, 'User not found')

    const isSamePassword = await user.comparePassword(password)
    if(!isSamePassword) return sendError(res, 'New password must be different')

    if(password.trim().length < 8 || password.trim().length > 20)
    return sendError(res, 'Password must be 8 to 20 characters long')
    
    user.password = password.trim();
    await user.save()

    await ResetToken.findOneAndDelete({owner: user._id})

    mailTransport().sendMail({
        from:'security@email.com',
        to: user.email,
        subject:'Password reset successfully',
        html: plainEmailTemplate("Password Reset Successfully", "Now you can Login with new password"),
       });

       res.json({success: true, message: "Password Reset Successfully"});
};