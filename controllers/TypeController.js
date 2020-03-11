const Type = require('./../models/type');

const {  validationResult} = require('express-validator');

exports.getAllTypes = (req, res) => {
   
    Type.findAll()
        .then((types) => {
            res.status(200).json({error: false, data: types })
        })
        .catch(err => res.status(404).json({ error: true, message: 'Types not found !' }))

}

exports.storeType = (req, res) => {

    let { name, active } = req.body;

    Type.create({
        name: name,
        active: (active == 'on') ? 1 : 0
    })
    .then((Type) => res.status(201).json({ error: false, data: Type }))
    .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for type' }))
   
}

exports.updateType = (req, res) => {
    let { name, active } = req.body;

    Type.update({
        name: name,
        active: (active == 'on') ? 1 : 0
    }, {
        where: { id: req.params.id }
    })
    .then((result) => res.status(202).json({ error: false, data: result }))
    .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
}

exports.getOneType = async (req, res) => {
       Type.findByPk(req.params.id)
       .then(type => res.status(200).json({error: false, data: type}))
       .catch(err => res.status(404).json({ error: true, message: 'type not found' }))    
}

exports.deleteType =  (req, res) => {
    res.status(200).json({error: false, data: "you can not delete this types "})   
}

exports.patchType = (req, res) => {
    
    Type.update(req.body, { where: { id: req.params.id } })
            .then(result => res.status(200).json({ error: false, data: result }))
            .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}

