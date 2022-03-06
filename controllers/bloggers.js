
const Dessert = require('../models/dessert');

// create review
async function createReview (req, res, next) {
    try {
        await Dessert.findById(req.params.id, function(e, dessert) {
            dessert.blogger.push(req.body)
            dessert.save (function (e) {
                res.redirect(`/desserts/${dessert._id}`)
            })
        })
    } catch (err) {
        console.log('there is an error')
    }
}

// remove review
function removeReview (req, res, next) {
    try {
        Dessert.findByIdAndUpdate(req.params.id, {
            $pull: {
                blogger: {_id: req.params.bloggerId}
            }
          }, function(err, dessert) {
            res.redirect(`/desserts/${dessert._id}`)     
          })
    } catch (err) {
        console.log(err)
    }

// code not working
    // try {
    //    Dessert.findById(req.params.id, function(e, dessert) {
    //         console.log(dessert.blogger.id(req.params.bloggerId))
            
    //         dessert.blogger.id(req.params.bloggerId).remove()
    //         console.log(dessert.blogger)
    //         dessert.save (function (e) {
    //             res.redirect(`/desserts/${dessert._id}`)
    //             console.log(req.params.bloggerId)
    //         })
    //     })
    // } catch (err) {
    //     console.log('there is an error deleting')
    //     console.log(err)
    // }
}


module.exports = {
    createReview,
    removeReview
}