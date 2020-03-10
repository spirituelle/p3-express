const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController');

router.get('', UserController.getAllUsers)
router.get(':id', UserController.getOneUser)
router.post('', UserController.addUser)
router.put(':id', UserController.updateUser)
router.delete(':id', UserController.deleteUser)
router.patch(':id', UserController.editUser)

module.exports = router;