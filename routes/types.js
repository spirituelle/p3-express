const express = require('express');
const router = express.Router();
const TypeController = require('./../controllers/TypeController');
const {  body } = require('express-validator');

const verifAuth = require('./../middleware/auth')


router.get('', verifAuth, TypeController.getAllTypes)
router.get('/:id', verifAuth, TypeController.getOneType)
router.post('', verifAuth, TypeController.storeType)
router.put('/:id', verifAuth, TypeController.updateType)
router.delete('/:id', verifAuth, TypeController.deleteType)
router.patch('/:id', verifAuth, TypeController.patchType)

module.exports = router;