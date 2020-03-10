const express = require('express');
const router = express.Router();
const TypeController = require('./../controllers/TypeController');

router.get('', TypeController.getAllTypes)
router.get('/:id', TypeController.getOneType)
router.post('', TypeController.storeType)
router.put('/:id', TypeController.updateType)
router.delete('/:id', TypeController.deleteType)
router.patch('/:id', TypeController.patchType)

module.exports = router;