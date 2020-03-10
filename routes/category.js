const express = require('express');
const CategoryController = require('./../controllers/CategoryController');
const {  body } = require('express-validator');

const router = express.Router();

router.get('', CategoryController.getAllCategories);
router.post('',[
    // username must be an email
    body('name').isString().isLength({ min: 10}),
    // password must be at least 5 chars long
    body('tags').isArray(),
    body('active').isBoolean(),
    body('image').isString()
  ], CategoryController.storeCategory);
router.put('/:id', CategoryController.updateCategory);
router.get('/:id', CategoryController.showOneCategory)
router.patch('/:id', CategoryController.patchCategory)
router.delete('/:id', CategoryController.deleteCategory)

module.exports = router;