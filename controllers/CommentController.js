const Comments = require('../models/comment')
const Post = require('../models/post')
const User = require('../models/user')




exports.getAllComment = (req, res) => {
    Comments.findAll({ include: [{ model: Post},{model:User }] })
    .then((comments) => res.status(200).json({error: false, data: comments}))
    .catch((err) => console.log(err))
    
};


exports.getOneComment = (req, res) => {
    Comments.findByPk(req.params.id)
        .then((comments) => res.status(200).json({ error: false, data: comments }))
        .catch((err) => console.log(err))


}

exports.addComment = (req, res) => {
   let { content, active,postId,userId}=req.body
    Comments.create({ content: content, active: active,postId:postId,UserId:userId })
    .then((comment) => res.status(200).json({ error: false, data: comment }))
    .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))

}

exports.updateComment = (req, res) => {
    let { content, active } = req.body;

    Comments.update({
        content: content,
        active: (active == 'on') ? 1 : 0
    }, {
        where: { id: req.params.id }
    })
        .then((result) => res.status(202).json({ error: false, data: result }))
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))

}

exports.deleteComment = (req, res) => {
    let id = req.params.id;

    Comments.destroy({ where: { id: id } })
        .then(() => res.status(204).json({}))
        .catch((err) => res.status(403).json({ error: true, message: 'impossible to delete this resource !' }))

};
exports.updateOneElementComment = (req, res) => {
    Comments.update(req.body, { where: { id: req.params.id } })
        .then(result => res.status(200).json({ error: false, data: result }))
        .catch(err => res.status(400).json({ error: true, message: 'bad request!' }))
}



