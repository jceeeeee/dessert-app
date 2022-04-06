const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema ({
    ingredientName: String,
    ingredientCategories: String,
    ingredientCalories: Number
  }, {
    timestamps: true
})

module.exports = mongoose.model('Ingredient', ingredientsSchema)