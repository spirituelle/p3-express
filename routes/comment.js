const express = require('express');
const router = express.Router();

const CommentController = require('./../controllers/CommentController')

router.get('', CommentController.getAllComment)
router.get('/:id', CommentController.getOneComment)
router.post('', CommentController.addComment)
router.put('/:id', CommentController.updateComment)
router.delete('/:id', CommentController.deleteComment)
router.patch('/:id', CommentController.updateOneElementComment)

module.exports = router;