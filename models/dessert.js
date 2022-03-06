const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bloggerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    decision: {
        type: String,
        default: 'would recommend',
        required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    }
  }, {
    timestamps: true
  })
  

const dessertSchema = new Schema ({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    priceRange: {
        type: String, 
        required: true
    },
    calories: {
        type: Number, 
        required: true
    },
    flavours: {
        type: String, 
        enum: ['Chocolate', 'Strawberry', 'Cookies and Cream', 'Cinnamon', 'Cheesecake', 'Red Velvet', 'Hazelnut', 'Mint', 'Matcha', 'Vanilla', 'Caramel', 'Fruity'],
        required: true
    },
    ingredientList:[{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    blogger: [bloggerSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Dessert', dessertSchema)