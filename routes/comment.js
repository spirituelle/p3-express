const express = require('express');
const router = express.Router();

const CommentController = require('./../controllers/CommentController')

router.get('/comments', CommentController.getAllComment)
router.get('/comment/:id', CommentController.getOneComment)
router.post('/comments', CommentController.addComment)
router.put('/comment/:id', CommentController.updateComment)
router.delete('/comment/:id', CommentController.deleteComment)
router.patch('/comment/:id', CommentController.updateOneElementComment)

module.exports = router;