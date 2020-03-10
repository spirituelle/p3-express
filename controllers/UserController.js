const User = require('./../models/user');

exports.getAllUsers = (req, res) => {
    User.findAll()
    .then((users) => res.status(200).json({error:false, data: users}) )
    .catch(err => console.log(err))
}

exports.getOneUser = async (req, res) => {
    let user = await User.findByPk(req.params.id)

    res.render('user/show', {
        user: user
    })
}

exports.addUser = (req, res) => {
    let{name, email, password, active} = req.body;
    console.log(req)
    User.create({ name : name, email: email, password:password, active:active})
    .then(user => {
        console.log(user)
    })
}

exports.updateUser = (req, res) => {
}  

exports.deleteUser =  (req, res) => {
    
}

exports.createUser = (req, res) => {

    res.render('user/create')
}