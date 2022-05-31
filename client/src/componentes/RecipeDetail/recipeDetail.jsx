import React from "react";
import Card from "../RecipeCard/recipeCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import NavBar from "../NavBar/NavBar";
 import {indiceFirstRec, indiceLastRec} from '../NavBar/NavBar'



export default function RecipesDetails(){
    const allRecipes = useSelector((state)=> state.recetas)
     const recetaActual = allRecipes.slice(indiceFirstRec, indiceLastRec)

    return(
        <React.Fragment>
            <div>
                {
                allRecipes?.map(r => {
                        return(
                            <div id = {r.id}>
                                <Card name = {r.name} dieta = {r.dieta} imagen = {r.imagen} />
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}