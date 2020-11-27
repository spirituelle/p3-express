const express = require('express');
const router = express.Router();
const PostController = require('./../controllers/PostController')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

const {  body } = require('express-validator');


router.get('', PostController.getAllPost)
router.get('/:id', PostController.getOnePost)
router.post('',[
                  body('content').isString().isLength({ min: 10}),
                  body('tags').isArray(),
                  body('active').isBoolean(),
                  body('image').isString()
                ], upload.single('image'), PostController.addPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)
router.patch('/:id', PostController.updateOneElementPost)
module.exports = router;
