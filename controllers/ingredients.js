const Dessert = require('../models/dessert');
const Ingredient = require('../models/ingredient');

async function addIngredient (req, res, next) {
    try {
        const newIngredient = new Ingredient(req.body)
        await newIngredient.save() 
        res.redirect ('/ingredients/index')
    } catch (err) {
        console.log(err)
    }
}
          
// get ingredients form
async function showIngredientsForm (req, res, next) {
    await res.render('ingredients/index', { title: 'New Ingredient Entry' });
  }

// add to dessert
function addToDessert (req, res, next) {
    const ingredientId = req.body.ingredientId
    Dessert.findById(req.params.id, function(e, dessert) {
        dessert.ingredientList.push(ingredientId)
        dessert.save()
        res.redirect(`/desserts/${dessert._id}`)
        console.log('this works')
    })
}

module.exports = {
    addIngredient,
    showIngredientsForm,
    addToDessert
}