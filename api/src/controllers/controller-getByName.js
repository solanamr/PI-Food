const {Recipe , DietType, Op} = require("../db")


const getRecipeByName = async(req, res) =>{
    try {
        const { name } = req.query
        if(name){ 
            const recipesFound = await Recipe.findAll({
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
            if(recipesFound){
                res.status(200).json(recipesFound)
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



// const getRecipeByName = async(req, res) =>{
//     const { name } = req.query
//     let totalRecetas = await getAllRecipes() 

//     if(name){ //** si por query me pasan un nombre
//         let nombreReceta = await totalRecetas.filter( r => r.name.toLowerCase().includes(name.toLowerCase()))  //** se hace un filter de todas las recetas por nombre donde se incluya el query y ademas que también se pueda incluir los nombre de recetas con todas letras minusculas
//         nombreReceta.length ? res.status(200).send(nombreReceta) : res.status(404).send('No se encontró la receta, volvé a intentar')  //** un ternario donde si se encuentra la receta tira un 200 con la misma sino un 404 con el mensaje 
//     }else{
//         res.status(200).send(totalRecetas)  //**si no hay query tira un 200 con el total de las recetas
//     }
// }


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

// const getInfoDb = async () =>{  //** me traigo la info de la bd y hago la relacion con el tipo de dieta
//     return await Recipe.findAll({
//         include:{
//             model: DietType,
//             attributes:["name"],  //** solo pido el nombre porque es lo unico que importa de esta tabla
//             through: {
//                 attributes: [],
//             }
//         }
//     })
// }


// const getAllRecipes = async () =>{
//     const apiInfo = await getApiInfo()
//     const bdInfo = await getInfoDb()
//     const allInfo  = await apiInfo.concat(bdInfo)
//     return allInfo
// };






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