const {Recipe , DietType} = require("../db")
const getApiInfo = require('./ApiData')


const getRecipeById = async (req, res) =>{
    try {
        const { id } = req.params.trim() //* se utiliza para recortar todos los espacios antes y después del string. 
        const InfoApi = await getApiInfo(id)
        if(id){
            const infoApi = await Recipe.findByPk(id, {
                    include: {
                        model: DietType,
                        attributes: ["name"],
                        through: {
                            attributes: []
                        }
                    }
            })    
            if(infoApi){
                res.status(200).json(InfoApi)
            }else{
                res.status(404).send('No se encontró niguna receta con ese ID')
        }
        }else{
            res.status(404).send('No existe tal ID')
        }
    } catch (error) {
        console.log(error)
    }
}



module.exports = { getRecipeById }