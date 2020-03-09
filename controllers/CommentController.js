const Comments = require('../models/comment')




exports.getAllComment = (req, res) => {
    Comments.findAll()
    .then((comments) => res.status(200).json({error: false, data: comments}))
    .catch((err) => console.log(err))
    
};


exports.getOneComment = (req, res) => {
    Comments.findByPk(req.params.id)
        .then((comments) => res.status(200).json({ error: false, data: comments }))
        .catch((err) => console.log(err))


}

exports.addComment = (req, res) => {
   let { content, active}=req.body
    Comments.create({ content: content, active: active }).then(comment => {
    
    })
}

exports.updateComment = (req, res) => {
    let { content, active } = req.body
    Comments.update({ content: content, active: active }, { where: { id: req.params.id }}).then(comment => {
    })

}

exports.deleteComment = (req, res) => {
   

};
exports.updateOneElementComment = (req, res) => {

  

};


