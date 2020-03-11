const User = require('../models/user')
const Type = require('./../models/type')

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const {  validationResult} = require('express-validator');


exports.sginIn = (req, res) => {
    let resultError= validationResult(req).array()

    let {name, email, password, type} = req.body

    if(resultError.length == 0){
        hashedPassword = bcrypt.hash(password, 8 )
        .then( hashedPassword=>{
            User.create({ name: name, email: email, password: hashedPassword, active: 1, typeId:type })
            .then(user => res.status(200).json({error: false, data: user }))
            .catch(err => res.status(300).json({error: true, data: "on peut pa ajouter l'utilisateur" }))
        })
       
    }else{
        res.status(404).json({ error: true, message: resultError })
    }
  
};


exports.signUp = (req, res) => {
   let {password, email}= req.body;
   User.findOne({where:{email: email }}).then(user => {
    if(user){
        bcrypt.compare(password, user.password )
        .then(resp => { 
            if(resp){
                var token = jwt.sign({ id: user.id, email: user.email }, 'premiercledesecuritepourbackend', {expiresIn: '1h'});

                res.status(200).json({ error: false, token: token, message: user.name })
            }else{
                res.status(402).json({ error: true, message: "mot de passe incorrect" })
            }
        })
        .catch(err => res.status(402).json({ error: true, message: "impossible de vérifier vos données" }))
    }
})

}
