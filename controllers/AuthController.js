const User = require('../models/user')
// const Type = require('./../models/type')

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const {  validationResult} = require('express-validator');


exports.sginIn = async (req, res) => {
    let resultError= validationResult(req).array()

    if(resultError.length > 0){  
        return res.status(400).json({ error: true, message: resultError });
    }
    let {firstName,lastName, email, password, phone, typeId} = req.body;
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    if(!hashedPassword) {
        return res.status(300).json({error: true, data: "on peut pa hacher le mot de passe" });
    }
    User.create({ firstName, lastName, email, phone, password: hashedPassword, active: 1, typeId })
    .then(user => {
        res.status(200).json({error: false, user });
    })
    .catch(err => {
        res.status(400).json({error: true, data: err });
    })  
};


exports.signUp = async (req, res) => {
    let {password, email}= req.body;
    var user = await User.findOne({where:{email: email }});

    if(!user){
        res.status(400).json({ error: true, message: "email n'éxiste pas" });
    }
    let validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){ 
        res.status(400).json({ error: true, message: "mot de passe incorrect" });
    }

    var token = jwt.sign(
        { 
        id: user.id, 
        typeId: user.typeId 
        }, 
        process.env.TOKEN_SECRET,
        {expiresIn: '24h'},
    );
    delete user.dataValues.password;
    delete user._previousDataValues.password;

    res.status(200).header('auth-token', token).json({ error: false, token, user }) 

}