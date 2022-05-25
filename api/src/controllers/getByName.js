const {Recipe , DietType, Op} = require("../db")
const getApiInfo = require('./ApiData')


const getRecipeByName = async(req, res) =>{
    try {
        const { name } = req.query
        const recipeByName = await getApiInfo(name)
        if(name){ 
            const recipeByName = await Recipe.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: {
                    model: DietType,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            if(recipeByName){
                res.status(200).json(recipeByName)
            }else{
                res.status(404).send('No se encontró ninguna receta')
            }
        }else{
            res.status(404).send('No se encontró la receta, volvé a intentar')  
        }
    } catch (error) {
        console.log(error)
    }  

}

module.exports = { getRecipeByName }

// router.get('/recipes', )

// const getApiInfo = async () => {
//    const urlApi = await fetch.get(`https://api.spoonacular.com/recipes/complexSearch?${API_KEY}&addRecipeInformation=true&number=100`)
//    const infoApi = await urlApi.data.map(e =>{
//        return {
//            id: e.id,
//            name: e.name,
//            summary: e.summary,
//            score: e.score,
//            healthScore: e.healthScore,
//            image: e.image,
//            steps: e.analizedInstructions[0]?.steps.map(e =>{
//                return{
//                    number: e.number,
//                    step: e.step
//                }
//            })
//        }
//    })
//    return infoApi
// }











// router.get(`/recipes/{id}`, async(req, res)=>{
//     const { id } = req.params
//     const info = await getAllRecipes()

//     if(id){
//         let recetaId = await info.filter(r => r)
//     }
// })


// module.exports = {
//     getApiInfo,
//     getInfoDb,
//     getAllRecipes
// }