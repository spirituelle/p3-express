const Posts = require('../models/post')

const Users = require('./../models/user')
const Comment = require('./../models/comment')
const Categorie = require('./../models/category')
const Tag = require('./../models/tag')
const Type = require('./../models/type')

var multer  = require('multer')


const {  validationResult} = require('express-validator');

exports.getAllPost = (req, res) => {
    Posts.findAll({ 
        include: [
            { 
                model: Users,
                include: [{model: Type}]
            },
            { model: Tag }, 
            {model: Categorie }, 
            {
                model: Comment, 
                include: [{model: Users}]
             }
        ] 
    })
    .then((post) => res.status(200).json({error: false, data: post}))
    .catch(err => res.status(404).json({ error: true, message: 'posts not found !' }))
    
};


exports.getOnePost = (req, res) => {
    Posts.findByPk(
        req.params.id,{
            include: [
                { 
                    model: Users,
                    include: [{model: Type}]
                },
                { model: Tag }, 
                {model: Categorie }, 
                {
                    model: Comment, 
                    include: [{model: Users}]
                 }
            ] 
        })
        .then((comments) => res.status(200).json({ error: false, data: comments }))
        .catch(err => res.status(404).json({ error: true, message: 'post not found !' }))
}

exports.addPost = (req, res) => {
   let { content, image, active, tags} = req.body

   let resultError= validationResult(req).array()
   
   if(resultError.length == 0){
        Posts.create({ content: content,image:image , active: active, tags:tags },{include: [ Tag ]})
            .then(addedPosted => res.status(200).json({ error: false, data: addedPosted }))
            .catch(err => res.status(404).json({ error: true, message: 'can not added post!' })) 
   }else{
    res.status(404).json({ error: true, message: resultError })
   }
   
    
}

exports.updatePost = (req, res) => {
    let { content, active } = req.body
    Posts.update({ content: content, active: active }, { where: { id: req.params.id }}).then(comment => {
    })

}

exports.deletePost = (req, res) => {
   
    res.status(404).json({ error: true, message: 'can not added post!' })
    
};
exports.updateOneElementPost = (req, res) => {

    Posts.update(req.body, { where: { id: req.params.id } })
    .then(result => res.status(200).json({ error: false, data: result }))
    .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))

};


