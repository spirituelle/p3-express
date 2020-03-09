const User = require('./../models/user')

exports.addUser = (req, res) => {

    let {name, email, password, active} = req.body
    User.create({ name: name, email: email, password: password, active: active })
    .then(user => {
        console.log( user)
      })
}

exports.updateUser = (req, res) => {

    let {name, email, password, active} = req.body

    User.update({ name: name, email: email, password: password, active: active })
    .then(user => {
        console.log( user)
    })
}

exports.getAllUsers = (req, res) => {

    User.findAll()
    .then((users) => res.status(200).json({error: false, data: users }) )
    .catch(err => console.log(err))

}
exports.getOneUser = (req, res) => {

     User.findByPk(req.params.id)
    .then((user) => res.status(200).json({error: false, data: user }) )
    .catch(err => console.log(err))

}