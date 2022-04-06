const Dessert = require('../models/dessert');
const Ingredient = require('../models/ingredient');

// get the main page with all desserts
async function index (req, res, next) {
    const allDesserts = await Dessert.find({})
    try {
        res.render('desserts/index', {title: 'All Desserts', allDesserts})
    } catch (err) {
        console.log(err)
        console.log('There is some sort of error')
    }   
}

// show each individual dessert with id page
function show (req, res, next) {
    Dessert.findById(req.params.id)
    .populate('ingredientList').exec((err, thisDessert) => {
        Ingredient.find({_id: {$nin: thisDessert}})
        .exec((err, ingredients) => {
                res.render('desserts/show', { title: 'Dessert', thisDessert, ingredients });
        })
    })
}

// create a dessert 
async function create (req, res, next) {
    await Dessert.create(req.body)
    try {
        res.redirect('/desserts')
    } catch (err) {
        console.log(err)
        console.log('creating a dessert failed')
    }
}

function newDessertForm(req, res, next) {
    res.render('desserts/new', { title: 'New Dessert Entry' });
  }

// update dessert entry
async function update (req, res, next) {
    await Dessert.updateOne({ _id: req.params.id}, {...req.body})
    try {
        res.redirect(`/desserts/${req.params.id}`)
    } catch (err) {
        console.log(err)
        console.log('updating a dessert failed')
    }
}

async function updateDessertForm(req, res, next) {
    const thisDessert = await Dessert.findById(req.params.id)
    res.render('desserts/edit', { title: 'Update Dessert Entry', thisDessert });
  }

// delete dessert entry
async function removeDessert (req, res, next) {
    await Dessert.findByIdAndRemove(req.params.id)
    try {
        res.redirect('/desserts')
    } catch (err) {
        console.log(err)
        console.log('delete failed')
    }
}

module.exports = {
    index,
    show,
    create,
    newDessertForm,
    updateDessertForm,
    update,
    removeDessert
}