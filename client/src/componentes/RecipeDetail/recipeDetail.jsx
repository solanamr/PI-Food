// import React from "react";
// import Card from "../RecipeCard/recipeCard";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";




// export default function RecipesDetails(){
//     const allRecipes = useSelector((state)=> state.recetas)


//     return(
//         <React.Fragment>
//             <div>
//                 {
//                 allRecipes?.map(r => {
//                         return(
//                             <div id = {r.id}>
//                                 <Card name = {r.name} dieta = {r.dieta} imagen = {r.imagen} />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </React.Fragment>
//     )
// }