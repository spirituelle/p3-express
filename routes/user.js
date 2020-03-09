const express = require('express');
const UserController = require('./../controllers/userController');

const router = express.Router();

// UserController.addUser()

router.get('', UserController.getAllUsers);
router.post('', UserController.addUser);
// router.put('/:id', CategoryController.updateCategory);
router.get('/:id', UserController.getOneUser)
// router.get('/:id', CategoryController.showOneCategory)
// router.patch('/:id', CategoryController.patchCategory)
// router.delete('/:id', CategoryController.deleteCategory)

module.exports = router;