const { getRecipeById } = require('../controllers/getById')
const router = require('express').Router()

router.get('/:id', getRecipeById)

module.exports = router