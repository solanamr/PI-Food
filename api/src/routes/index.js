//*? BACKEND

const { Router } = require('express');
// Importar todos los routers;

const rutaRecipeByName = require('./route-getRecipeByName')


const router = Router();

// Configurar los routers

router.use('/recipes', rutaRecipeByName)  //** www.localhost/recipes/?name

//** use: es un middelware. realiza una accion dsp de que se hace un request pero antes de que se mande un response




module.exports = router;
