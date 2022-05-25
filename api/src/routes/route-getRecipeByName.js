const { getRecipeByName } = require ('../controllers/getByName')
const  router = require ('express').Router()  //** ejecutando la funcion ruteadora

router.get('/?name', getRecipeByName)



module.exports = router



