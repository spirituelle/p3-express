

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');


const CommentController = require('./../controllers/CommentController')

router.get('', CommentController.getAllComment)
router.get('/:id', CommentController.getOneComment)
router.post('' ,[
    body('content').isString().isLength({ min: 1}),
    body('active').isBoolean(),
    body('postId').isInt(),
    body('userId').isInt().withMessage("id is not integer !")
  ],  CommentController.addComment)
router.put('/:id', CommentController.updateComment)
router.delete('/:id', CommentController.deleteComment)
router.patch('/:id', CommentController.updateOneElementComment)

module.exports = router;