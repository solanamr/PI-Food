const { Recipe, DietType } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env

const getApiInfo = async () => {   //*! TENGO QUE CAMBIAR DE API TODOS LOS DIAS
    try {
        const urlApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        // console.log(urlApi)
        
        for (let i = 0; i < steps.length; i++) {
            urlApi.data.results.map((pasos) => pasos.steps)
            pasos = `${pasos} ${steps[i]}`
        }
        
        urlApi.data.results.map(async (r) =>{
           await Recipe.findOrCreate({  //** lo concatena (o guarda) en la base de datos
                where: {
                   id: r.id,
                   name: r.title,
                   summary: r.summary,
                   healthScore: r.healthScore,
                   steps: r.analyzedInstructions[0]?.steps[0].step ? pasos  : '',
                   image: r.image,
                }
            })
        })
        
    } catch (error) {
        console.log(error)
    }
}

getApiInfo()

module.exports = {
    getApiInfo
}


