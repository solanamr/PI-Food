import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes, filterByDiet, recipeCreated, alphabeticSort, scoreSort } from "../../actions/actions";
import { Link } from "react-router-dom";
import Card from "../RecipeCard/recipeCard";
import Pagination from "../Pagination/pagination";
import SearchBar from "../SearchBar/searchBar";
import FilterDiet from "../Filtros/Dietas/Dieta";
import DbOrApi from '../Filtros/Creacion/Creacion';
import AtoZ from '../Filtros/OrdenAToZ/OrdenAToZ';
import HealthScore from '../Filtros/HealthScore/healtScore';
import h from '../Home/h.module.css'

 

export default function HomePage(){
    
    const dispatch = useDispatch()  
    const allRecipes = useSelector((state) => {return state.recetas})  
    const [orden, setOrden] = useState("")
    const [pagActual, setPagActual] = useState(1) 
    const [recPorPag, setRecPorPag] = useState(9) 
    const indiceLastRec = pagActual * recPorPag;
    const indiceFirstRec = indiceLastRec - recPorPag;
    const recetaActual = allRecipes.slice(indiceFirstRec, indiceLastRec)


    const paginado = (nroPagina) =>{
        setPagActual(nroPagina)
    }

    // const mapDieta = dieta.map(el => el.dieta)

    useEffect(() =>{    
        dispatch(getAllRecipes())
    }, [dispatch])


    function handleClick(e){
        e.preventDefault()
        dispatch(getAllRecipes())
    } 
    
    function handleFiltroByDieta(e){ //*anda
       dispatch(filterByDiet(e.target.value))
    }

    function handleFiltroDb(e){ //*anda
        dispatch(recipeCreated(e.target.value))
    }

    function handleAToZ(e){ //*anda
        e.preventDefault()
        dispatch(alphabeticSort(e.target.value))
        setPagActual(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleScoreSort(e){
        e.preventDefault()
        dispatch(scoreSort(e.target.value))
        setPagActual(1)
        setOrden(`Ordenado ${e.target.value}`) //*
    }

    return(
        <React.Fragment>
         <div className={h.container}>
            <div>
                <Link to= '/recipes'><button className={h.botonCrearRec}>Crear receta</button></Link>
                
                <button onClick={e => {handleClick(e)}} className={h.botonCrearRec}>Recargar recetas</button>

            </div>
        <div>
        {/* <AtoZ/> */}
        <select onChange={e => {handleAToZ(e)}} className={h.botonCrearRec}> 
            <option value="">Búsqueda alfabética</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>

     </div>
    
        <div>
        <FilterDiet/>

        </div>

        <div>
        <select onChange={e =>{handleScoreSort(e)}} className={h.botonCrearRec}>  
                <option value="">Búsqueda por puntuacion</option>
                <option value="up">Más alta</option>
                <option value="down">Más baja</option>
            </select>
            {/* <HealthScore setPagActual={setPagActual} setOrden={setOrden}/> */}
        </div>

        <div>
        <select onChange={e => {handleFiltroDb(e)}} className={h.botonCrearRec}>  
                <option value="all">Todas las recetas</option>
                <option value="current">Existentes</option>
                <option value="created">Creadas</option>
            </select>
            {/* <DbOrApi setPagActual={setPagActual} setOrden={setOrden}/> */}
        </div>

        <SearchBar />
        
        <Pagination
        recPorPag = {recPorPag}
        allRecipes = {allRecipes.length}
        paginado = {paginado}
        />
    <div>
        <span>
        <div className={h.recetas}>
                {
                recetaActual.length > 0 ? recetaActual?.map(r => {
                        return(
                            <div key = {r.id}>
                                <Link to= {`/recipes/${r.id}`}>
                                <Card name = {r.name}  dieta = {r. dieta} imagen = {r.imagen} />
                                </Link>
                            </div>
                        )
                    })
                    :
                    <div>
                    <div className={h.ball}></div>
                    <p className={h.loading}>Loading</p>
                </div>
                }
            </div>
        </span>
    </div>

  </div>
        </React.Fragment>
    )
}