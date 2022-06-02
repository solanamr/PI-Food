// import React from "react";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllRecipes } from "../../actions/actions";
// import RecipesDetails from "../RecipeDetail/recipeDetail";
// import Pagination from "../Pagination/pagination";



// export default function NavBar(){


//     const dispatch = useDispatch()  //* mapdispatch...
//     const allRecipes = useSelector((state) => {return state.recetas})  //* reemplaza al mapstatetoprops

//     const [pagActual, setPagActual] = useState(1)
//     const [recPorPag, setRecPorPag] = useState(9)
//     const indiceLastRec = pagActual * recPorPag;
//     const indiceFirstRec = indiceLastRec - recPorPag;
//     const recetaActual = allRecipes.slice(indiceFirstRec, indiceLastRec)


//     const paginado = (nroPagina) =>{
//         setPagActual(nroPagina)
//     }


//     useEffect(() =>{    //*reemplaza mapdispatchtoprops
//         dispatch(getAllRecipes())
//     }, [dispatch])

//     useEffect(() =>{
//         // console.log(allRecipes.length)
//         console.log(allRecipes[0])
//     }, [allRecipes])

//     function handleClick(e){
//         e.preventDefault()
//         dispatch(getAllRecipes())
//     } 


//     return(
//         <React.Fragment>
//              <div>
//                 <Link to= '/recipes'>Crear receta</Link>
//                 <button onClick={e => {handleClick(e)}}>Crear</button>
//             </div>
//         <div>
//         <select> 
//             <option value="">Búsqueda alfabética</option>
//             <option value="asc">A-Z</option>
//             <option value="desc">Z-A</option>
//         </select>
//      </div>
    
//         <div>
//             <select> 
//                 <option value="dietas">Búsqueda por dieta</option>
//                 <option value="gluten free">Libre de gluten</option>
//                 <option value="dairy free">Ovo-Vegetariano</option>
//                 <option value="keto">Keto</option>
//                 <option value="vegetarian">Vegetariano</option>
//                 <option value="huevo free">Lacto Vegetariano</option>
//                 <option value="vegan">Vegano</option>
//                 <option value="pescetarian">Pescetariano</option>
//                 <option value="paleo">Paleo</option>
//                 <option value="primal">Primitiva</option>
//                 <option value="FODMAP">FODMAP</option>
//                 <option value="whole30">Completo 30</option>
//              </select>
//         </div>

//         <div>
//             <select>  
//                 <option value="">Búsqueda por puntuacion</option>
//                 <option value="up">Más alta</option>
//                 <option value="down">Más baja</option>
//             </select>
//         </div>

//         <div>
//             <select>  
//                 <option value="all">Todas las recetas</option>
//                 <option value="current">Existentes</option>
//                 <option value="created">Creadas</option>
//             </select>
//         </div>

//         <RecipesDetails />

//         <Pagination 
//         recPorPag = {recPorPag}
//         allRecipes = {allRecipes.length}
//         paginado = {paginado}
//         />
//         </React.Fragment>
//     )
// }