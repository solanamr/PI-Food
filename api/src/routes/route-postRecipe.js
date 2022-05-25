const { postRecipes } = require('../controllers/postRecipe')
const router = require('express').Router()


router.post('/recipes', postRecipes)


module.exports = router