const express = require('express');
const router = express.Router();

const ingredientsCtrl = require('../controllers/ingredients')

// get ingredients page
router.get('/ingredients/index', ingredientsCtrl.showIngredientsForm);

router.post('/ingredients', ingredientsCtrl.addIngredient);

router.post('/desserts/:id/ingredients', ingredientsCtrl.addToDessert);


module.exports = router;