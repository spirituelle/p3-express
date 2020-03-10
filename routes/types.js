const express = require('express');
const router = express.Router();
const TypeController = require('./../controllers/TypeController');

router.get('/types', TypeController.getAllTypes)
router.get('/type/:id', TypeController.getOneType)
router.post('/types', TypeController.storeType)
router.put('/type/:id', TypeController.updateType)
router.delete('/type/:id', TypeController.deleteType)
router.patch('/type/:id', TypeController.createType)