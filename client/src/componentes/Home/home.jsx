import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, filterByDiet, recipeCreated, alphabeticSort, scoreSort } from "../../actions/actions";
import { Link } from "react-router-dom";
import Card from "../RecipeCard/recipeCard";
import Pagination from "../Pagination/pagination";


export default function HomePage(){
    
    const dispatch = useDispatch()  //* mapdispatch...
    const allRecipes = useSelector((state) => {return state.recetas})  //* reemplaza al mapstatetoprops
    const [pagActual, setPagActual] = useState(1)
    const [recPorPag, setRecPorPag] = useState(9)
    const indiceLastRec = pagActual * recPorPag;
    const indiceFirstRec = indiceLastRec - recPorPag;
    const recetaActual = allRecipes.slice(indiceFirstRec, indiceLastRec)


    const paginado = (nroPagina) =>{
        setPagActual(nroPagina)
    }

    // const mapDieta = dieta.map(el => el.dieta)

    useEffect(() =>{    //*reemplaza mapdispatchtoprops
        dispatch(getAllRecipes())
    }, [dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getAllRecipes())
    } 
    
    function handleFiltroByDieta(e){
       dispatch(filterByDiet(e.target.value))
    }

    function handleFiltroDb(e){
        dispatch(recipeCreated(e.target.value))
    }

    function handleAToZ(e){
        dispatch(alphabeticSort(e.target.value))
    }

    function handlScoreSort(e){
        dispatch(scoreSort(e.target.value))
    }

    return(
        <React.Fragment>

            <div>
                <Link to= '/recipes'><button>Crear receta</button></Link>
                
                <button onClick={e => {handleClick(e)}}>Recargar recetas</button>

            </div>
        <div>
        <select onChange={e => handleAToZ(e)}> 
            <option value="">Búsqueda alfabética</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
     </div>
    
        <div>
            <select onChange={e => handleFiltroByDieta(e)}> 
            <option velue="all">Todas las Dietas</option>
                <option value="gluten free">Gluten Free</option>
                <option value="dairy free">Dairy Free</option>
                <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole30</option>
                <option value="fodmap friendly">Fodmap Friendly</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="ketogenic">Ketogenic</option>
             </select>
        </div>

        <div>
            <select onChange={e =>{handlScoreSort(e)}}>  
                <option value="">Búsqueda por puntuacion</option>
                <option value="up">Más alta</option>
                <option value="down">Más baja</option>
            </select>
        </div>

        <div>
            <select onChange={e => handleFiltroDb(e)}>  
                <option value="all">Todas las recetas</option>
                <option value="current">Existentes</option>
                <option value="created">Creadas</option>
            </select>
        </div>

        <Pagination
        recPorPag = {recPorPag}
        allRecipes = {allRecipes.length}
        paginado = {paginado}
        />
        {/* <NavBar /> */}
    <div>
        <span>

        <div>
                {
                recetaActual?.map(r => {
                        return(
                            <div key = {r.id}>
                                <Card name = {r.name}  dieta = {r. dieta} imagen = {r.imagen} />
                            </div>
                        )
                    })
                }
            </div>


        {/* <RecipesDetails />         */}
        </span>
    </div>

        
        </React.Fragment>
    )
}