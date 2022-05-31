import axios from 'axios';
// import {LOCAL_HOST}  from './index';

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";


//! todas las recetas

// export function getAllRecipes(){
//     return function(dispatch){
//          axios.get(`http://localhost:3001/recipes`)
//         .then(recetas =>
//             dispatch({
//                 type: "GET_ALL_RECIPES",
//                 payload: recetas.data
//             })
//         )
//         .catch(error => console.log(error))
//     }
// }


export function getAllRecipes(){
            return async function(dispatch){
                try {
                    const recetas = await axios.get("http://localhost:3001/recipes") 
                    // console.log("axion", recetas.data) 
                    return dispatch({
                        type: "GET_ALL_RECIPES",
                        payload: recetas.data
                    })
                } catch (error) {
                    console.log(error)
                }
        }
}


//! detalle por id

export function getRecipeDetail(payload){
    return function(dispatch){
        return fetch(`http://localhost:3001/recipes/${payload}`)
        .then(detalle =>{
            dispatch({
                type: "GET_RECIPE_DETAILS",
                payload: detalle.data
            })
        })
        .catch(error => console.log(error))
    }
}

//! busqueda por nombre

export function recipeByName(payload){
    return async function(dispatch){
        try {
            const busqueda = await axios.get(`http://localhost:3001/recipes?name=${payload}`)
            return dispatch({
                type: "SEARCH_RECIPE",
                payload: busqueda.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

//! receta por dieta

export function recipeByDiet(){
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


//! filtrado por dieta

export function filterByDiet(payload){
    return{
        type: "DIET_TYPE_FILTER",
        payload: payload
    }
}

//! creacion receta

export function postRecipe(payload){
        try {
            const crear = axios.post(`http://localhost:3001/recipes/${payload}`)
            return crear
        } catch (error) {
            console.log(error)
        }
}


//! orden alfabetico

export function alphabeticSort(payload){
    return{
        type: "ALPHABETICAL_SORT",
        payload: payload
    }   
}


//! orden puntuacion

export function scoreSort(payload){
    return{
        type: "SCORE_SORT",
        payload: payload
    }
}