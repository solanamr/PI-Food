import axios from 'axios';


export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const DIET_TYPE_FILTER = "DIET_TYPE_FILTER";
export const FILTRO_CREACION = "FILTRO_CREACION";
export const ALPHABETICAL_SORT = "ALPHABETICAL_SORT"
export const SCORE_SORT = "SCORE_SORT";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const GET_DIET = "GET_DIET";
 


//! todas las recetas - funca

export function getAllRecipes(){
    return function(dispatch){
         axios.get(`http://localhost:3001/recipes`)
        .then(recetas =>
            dispatch({
                type: "GET_ALL_RECIPES",
                payload: recetas.data
            })
        )
        .catch(error => console.log(error))
    }
}


// export function getAllRecipes(){
//             return async function(dispatch){
//                 try {
//                     const recetas = await axios.get("http://localhost:3001/recipes") 
//                     // console.log("axion", recetas.data) 
//                     return dispatch({
//                         type: "GET_ALL_RECIPES",
//                         payload: recetas.data
//                     })
//                 } catch (error) {
//                     console.log(error)
//                 }
//         }
// }

//! filtrado por dieta - anda

export function filterByDiet(payload){
    console.log(payload)
    return{
        type: "DIET_TYPE_FILTER",
        payload: payload
    }
}



//* detalle por id - creo que no es necesaria

export function getRecipeDetail(payload){
    return async function(dispatch){
        return await fetch(`http://localhost:3001/recipes/${payload}`)
        .then(detalle =>{
            dispatch({
                type: "GET_RECIPE_DETAILS",
                payload: detalle.data
            })
        })
        .catch(error => console.log(error))
    }
}

//! busqueda por nombre -anda

export function recipeByName(name){
    return async function(dispatch){
        try {
            const busqueda = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: "SEARCH_RECIPE",
                payload: busqueda.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//! incluir dieta en el post - 

export function geDieta(){
    return async function(dispatch){
        try {
            const dieta = axios.get(`http://localhost:3001/diets`)
            return dispatch({
                type: "GET_DIET",
                payload: dieta.data
            })
        } catch (error) {
            
        }
    }
}


//! posteo 
export function postReceta(payload){
    return async function(dispatch){
        const posteo = await axios.post(`http://localhost:3001/recipes`, payload)
        return posteo
    }
}


//! filtro de api y db - anda a medias

export function recipeCreated(payload){
    return{
        type: 'FILTRO_CREACION',
        payload
    }
}


//! orden alfabetico - anda

export function alphabeticSort(payload){
    return{
        type: "ALPHABETICAL_SORT",
        payload: payload
    }   
}


//! orden puntuacion - anda

export function scoreSort(payload){
    return{
        type: "SCORE_SORT",
        payload: payload
    }
}