//*? BACKEND

const { Router } = require('express');
// Importar todos los routers;

const rutaRecipeByName = require('./route-getRecipeByName')
const rutaRecipeById = require('./route-getRecipeById')
const rutaPostRecipe = require('./route-postRecipe')


const router = Router();

// Configurar los routers

router.use('/recipes', rutaRecipeByName)  //** www.localhost/recipes/?name
router.use('/recipes', rutaRecipeById) //** localhost/3001/recipes/:id
router.use('/recipes', rutaPostRecipe) 

//** use: es un middelware. realiza una accion dsp de que se hace un request pero antes de que se mande un response




module.exports = router;
