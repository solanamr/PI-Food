 import React from "react";
 import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router";
import { getRecipeDetail } from '../../actions/actions'
import { useEffect } from 'react';


export default function RecipesDetails(){
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() =>{
        dispatch(getRecipeDetail(id))
    },[dispatch, (id)])
    
    const detalleRec = useSelector((state)=> state.detalles)
    console.log(detalleRec)

    return(
        <React.Fragment>
            <div>
                {
                    detalleRec.length > 0 ?
                    <div>
                        <h1>Nombre: {detalleRec[0].name}</h1>

                        <h3>Resumen: {detalleRec[0].resumen.replace(/<[^>]*>?/g, '')}</h3>

                        <h4>Nivel de saludable: {detalleRec[0].nivelSalud}</h4>

                        <img src={detalleRec[0].image ? detalleRec[0].image : detalleRec[0].imagen} alt="" />

                        <h4>Pasos: {detalleRec[0].pasos}</h4>

                        <h4>Dietas: {!detalleRec[0].creadoEnDb ? detalleRec[0].dieta + "" : detalleRec[0].dieta.map((d) => d.name + (' '))}</h4> 
                    </div>
                    : <p>Cargando...</p>
                }
                <Link to = '/home'>
                    <button>Volver al menu principal</button>
                </Link>
            </div>
        </React.Fragment>
    )
}