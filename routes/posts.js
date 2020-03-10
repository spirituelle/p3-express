const express = require('express');
const router = express.Router();
const PostController = require('./../controllers/PostController')

router.get('', PostController.getAllPost)
router.get('/:id', PostController.getOnePost)
router.post('', PostController.addPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)
router.patch('/:id', PostController.updateOneElementPost)
module.exports = router;