const Comments = require('./../models/Comment')

const Sequelize = require('sequelize');


var comments = [];

exports.getAllComment = (req, res) => {
    comments.findAll({

    })

   
};


exports.getOneComment = (req, res) => {
    comments.findByPk(req.params.id)
        .then((prd) => {
            res.render('products/show-product', { infoProducts: prd })
        })

}

exports.addComment = (req, res) => {
    let { title, description, price, urlImage, categoryId } = req.body
    comments.create({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage,
        categoryId: categoryId
    }).then((prd) => {
        products.push(prd)
        res.redirect('/products')
    })
        .catch((err) => {
            console.log(err)
        })

}

exports.updateComment = (req, res) => {
    comments.findByPk(req.params.id)
        .then((prd) => {
            Category.findAll({ where: { etat: true } })
                .then((cat) => {
                    // res.render('products/create-product', {listeCateory: cat})
                    res.render('products/update-product', { infoProducts: prd, listeCateory: cat })

                })
        })

}

exports.deleteComment = (req, res) => {
    comments.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect('/comment')
    })

};
exports.updateOneElementComment = (req, res) => {
    let { title, description, price, urlImage, category_id } = req.body
    comments.update({
        title: title,
        description: description,
        price: price,
        urlImage: urlImage,
        category_id: category_id
    }, { where: { id: req.params.id } }).then(() => {
        res.redirect('/products')
    })
        .catch((err) => {
            console.log(err)
        })

};


