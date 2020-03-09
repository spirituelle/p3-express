const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/UserController');

router.get('/users', UserController.getAllUsers)
router.get('/user/:id', UserController.getOneUser)
router.post('/users', UserController.storeUser)
router.put('/user/:id', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)
router.patch('/user/:id', UserController.createUser)

module.exports = router;