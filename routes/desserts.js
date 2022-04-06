var express = require('express');
var router = express.Router();

const dessertsCtrl = require('../controllers/desserts')

// routes for desserts
router.get('/', dessertsCtrl.index);
router.get('/new', dessertsCtrl.newDessertForm);
router.get('/:id', dessertsCtrl.show);
router.get('/:id/edit', dessertsCtrl.updateDessertForm);
router.post('/', dessertsCtrl.create);
router.put('/:id', dessertsCtrl.update);
router.delete('/:id', dessertsCtrl.removeDessert);


module.exports = router;
