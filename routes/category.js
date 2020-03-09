const express = require('express');
const CategoryController = require('./../controllers/CategoryController');

const router = express.Router();

router.get('categories', CategoryController.getAllCategorys);
router.post('categories', CategoryController.storeCategory);
router.put('category/:id', CategoryController.updateCategory);
router.get('categry/:id', CategoryController.showOneCategory)
router.patch('category/:id', CategoryController.patchCategory)
router.delete('category/:id', CategoryController.deleteProduct)

module.exports = router;