const { Recipe, DietType } = require('../db')
// const getApiInfo = require('./ApiData')

const postRecipes = async(req, res) =>{
    try {
        const { name, summary, healthScore, steps, image } = req.body
        // const createRecipe = await getApiInfo(name, summary, healthScore, steps)
       const recipeCreated = await Recipe.create({
            name: name,
            summary: summary,
            healthScore: healthScore,
            steps: steps,
            image: image
        })

        const recipeByDiet = await DietType.findAll({
            where:{
                name: name
            }
        })

        recipeCreated.addDietTypes(recipeByDiet)

    } catch (error) {
        console.log(error)
    }
}




module.exports = postRecipes