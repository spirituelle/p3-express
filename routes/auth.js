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
            }
        })
    })
    .trim(),
    body('password').isLength({ min: 8}),
    body('name').isString().isLength({ min: 5}),
    body('image').isString(),
    body('type').isInt()

  ], AuthController.sginIn);

  router.post('/signin', AuthController.signUp);


module.exports = router;