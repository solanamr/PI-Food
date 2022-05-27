//*? BACKEND

const { Router } = require('express');
const { Recipe, Diettype } = require('../db')
const { getAllInfo  } = require('../controllers/ApiData')
// Importar todos los routers;


const router = Router();

//*! query y todas las recetas

router.get("/recipes", async(req, res, next)=>{
   try {
       const { name } = req.query
       const recetas = await getAllInfo();
       if(name){
           const nombreQuery = recetas.filter(rec => rec.name.toLowerCase().includes(name.toLowerCase()))
           if(nombreQuery.length > 0){
               res.status(200).json(nombreQuery)
         }else{
             res.status(404).send("No se encontró la receta con ese nombre")
         }
       }else{
           res.send(recetas)
       }
       
   } catch (error) {
       next(error)
   }
});



//*! id
router.get('/recipes/:id', async(req, res, next) =>{
    try {
        const { id } = req.params
        const recetaId = await getAllInfo()

        if (id) {
            const recipeId = recetaId.filter(el => el.id.toString() === id.toString());
            if (recipeId.length > 0) res.status(200).send(recipeId)
            else res.status(404).json("No recipes with that ID" )
        }
    } catch (error) {
        next(error)
    }
})



//*! post
router.post('/recipes', async(req, res, next) =>{
    try {
        const { id, name, summary, healthScore, steps, image, dieta } = req.body
        const recipeCreated = await Recipe.create({
             id, 
             name,
             summary,
             healthScore,
             steps,
             image
        })

        const recetaC = await Diettype.findAll({
            where:{
                name: dieta
            }
        })

        recipeCreated.addDiettypes(recetaC)
        res.status(200).send('¡Receta creada exitosamente!')

    } catch (error) {
        next(error)
    }
})



//*! dietas
router.get('/diets', async (req, res, next) =>{
    const tipoDeDietas = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian',
                            'Paleo', 'Primal', 'Low FODMAP', 'Whole30']
    try {
        tipoDeDietas.forEach(diet =>{
            Diettype.findOrCreate({
                where: {
                    name: diet
                }
            })
        })
        const dietas = await Diettype.findAll()
        res.status(200).send(dietas)
    } catch (error) {
        next(error)
    }

})
// Configurar los routers






module.exports = router;
