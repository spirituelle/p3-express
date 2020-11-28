const express = require('express');
const AuthController = require('./../controllers/AuthController');
const {  body } = require('express-validator');
const User = require('./../models/user')
const router = express.Router();

router.post('/signup',[
    body('email')
    .isEmail()
    .custom((value) => {
        return User.findOne({where:{email: value }}).then(user => {
            if(user){
                return Promise.reject('E-mail already in use');
            }else{

            }
        })
    })
    .trim(),
    body('password').isLength({ min: 8}),
    body('firstName').isString().isLength({ min: 2}),
    body('lastName').isString(),
    body('typeId').isInt(),

], AuthController.sginIn);

  router.post('/signin',[
    body('email')
    .isEmail()
    .trim(),
    body('password').isLength({ min: 8}),
], AuthController.signUp);


module.exports = router;