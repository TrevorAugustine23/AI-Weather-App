const { check, validationResult } = require('express-validator');

exports.validateUser = [check('Uname').trim().not().isEmpty().withMessage('Name is missing!').isLength({min:3, max:20}).withMessage('Name must be at least 20 characters'),
check('email').normalizeEmail().isEmail().withMessage('Email is invalid'), 
check('password').trim().not().isEmpty().withMessage('password is missing'). isLength({min:8, max:20}).withMessage("Password must be 8 to 20 Characters")];


exports.validate =  (req, res, next) => {
    const error = validationResult(req).array()
    if(!error.length)return next()

    res.status(400).json({success: false, error: error[0].msg})
}