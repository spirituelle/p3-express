const User = require('./../models/user')

const Type = require('./../models/type')
const {  validationResult} = require('express-validator');

exports.addUser = (req, res) => {

    let {name, email, password, active, type} = req.body
    User.create({ name: name, email: email, password: password, active: active, typeId:type })
    .then(user => res.status(200).json({error: false, data: user }))
}

exports.updateUser = (req, res) => {

    let {name, email, password, active, type} = req.body

    User.update({ name: name, email: email, password: password, active: active, typeId:type })
    .then(user => res.status(200).json({error: false, data: user }) )
    .catch(err => res.status(200).json({error: true, data: "this user is not found" }))
}

exports.getAllUsers = (req, res) => {

    User.findAll({ include: [{ model: Type}] })
    .then((users) => res.status(200).json({error: false, data: users }) )
    .catch(err => res.status(200).json({error: true, data: users }))

}
exports.getOneUser = (req, res) => {

     User.findByPk(req.params.id)
    .then((user) => res.status(200).json({error: false, data: user }) )
    .catch(err => res.status(200).json({error: true, data: "this user is not found" }))

}
exports.deleteUser = () =>{
    res.status(200).json({error: true, data: "you can not delete this user" })
}
exports.editUser =(req, res) =>{
    User.update(req.body, { where: { id: req.params.id } })
    .then(result => res.status(200).json({ error: false, data: result }))
    .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}