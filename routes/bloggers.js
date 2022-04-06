const express = require('express');
const router = express.Router();

const bloggersCtrl = require('../controllers/bloggers')

router.post('/desserts/:id/bloggers', bloggersCtrl.createReview) 

router.delete('/desserts/:id/bloggers/:bloggerId', bloggersCtrl.removeReview)



module.exports = router;