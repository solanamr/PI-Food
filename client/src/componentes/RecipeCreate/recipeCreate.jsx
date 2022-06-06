import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { geDieta, postReceta } from '../../actions/actions';
import { useDispatch, useSelector } from "react-redux";
import crear from '../RecipeCreate/crear.module.css';


function validacion(input){
    const errores = {}
    if(!input.name){
        errores.name = "Debe contener un nombre";
    }
     if(!input.resumen){
        errores.resumen = "Se necesita un resúmen";
    }
    //  if(input.nivelSalud < 10){
    //     errores.nivelSalud = "El nivel de saludable debe ser mayor a 100";
    // } 
    // if(!input.pasos){
    //     errores.pasos = "Debes redactar los pasos";
    // }
    return errores
}

export default function RecipeCreate(){

     const dispatch = useDispatch()
    // const refresh = useNavigate()
    // const dietas = useSelector((state) => state.diets)
    const [errores, setErrores] = useState({})

    const [input, setInput] = useState({
        name: "",
        resumen: "",
        nivelSalud: null,
        imagen: null,
        pasos: null,
        dieta: []
    })

    useEffect(() =>{
        dispatch(geDieta())
    }, [dispatch])


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
        setErrores(validacion({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }


    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                dieta: [...input.dieta, e.target.value]
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!input.name || !input.resumen){
            return alert('Complete los campos vacios.')
          }
        dispatch(postReceta(input))
        setInput({
            name: "",
            resumen: "",
            nivelSalud: null,
            imagen: null,
            pasos: null,
            dieta: []
        })
        alert("¡Tu receta fue creada con éxito!")
        // refresh.push('/home')
    }


    return(
        <React.Fragment>
            <div className={crear.contenedor}>
                <h1 className={crear.h1}>A cocinar</h1>
                <form onSubmit={(e) => {handleSubmit(e)}} >
                     <div className={crear.div}>
                         <div>
                        <label className={crear.label}>Nombre</label>
                        <input type="text" value={input.name} name= "name" onChange={(e)=>handleChange(e)} className={crear.input}/>
                        {errores.name && (
                        <p className={crear.error}>{errores.name}</p>)}
                         </div>


                        <label className={crear.label}>Resumen</label>
                        <textarea value={input.resumen} name="resumen" onChange={(e)=>handleChange(e)}  className={crear.input}/>
                        {errores.resumen && (<p className={crear.error}>{errores.resumen}</p>)}


                        <label className={crear.label}>Nivel de saludable</label>
                        <input type="number" value={input.nivelSalud} name = "nivelSalud" onChange={(e)=>handleChange(e)}  className={crear.input}/>
                        {errores.nivelSalud && (<p className={crear.error}>{errores.nivelSalud}</p>)}


                        <label className={crear.label}>Imagen</label>
                        <input type="text" value={input.imagen} name="imagen" onChange={(e)=>handleChange(e)}  className={crear.input}/>


                        <label className={crear.label}>Pasos a seguir</label>
                        <textarea value={input.pasos} name="pasos" onChange={handleChange}  className={crear.input}/>
                        {errores.pasos && (<p className={crear.error}>{errores.pasos}</p>)}


                        <label className={crear.dietas}>Dietas</label>
                        <label className={crear.check}>Gluten Free</label>
                        <input type="checkbox" value= "gluten free" name="gluten free" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Dairy Free</label>
                        <input type="checkbox" value= "dairy free" name="dairy free" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Lacto-ovo vegetarian</label>
                        <input type="checkbox" value= "lacto ovo vegetarian" name="lacto ovo vegetarian" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Vegano</label>
                        <input type="checkbox" value= "vegan" name="vegan" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Paleo</label>
                        <input type="checkbox" value= "paleolithic" name="paleolithic" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Primitiva</label>
                        <input type="checkbox" value= "primal" name="primal" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Whole 30</label>
                        <input type="checkbox" value= "whole 30" name="whole 30" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>FODMAP friendly</label>
                        <input type="checkbox" value= "fodmap friendly" name="fodmap friendly" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Vegetariano</label>
                        <input type="checkbox" value= "vegetarian" name="vegetarian" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Pescatariano</label>
                        <input type="checkbox" value= "pescatarian" name="pescatarian" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                        <label className={crear.check}>Keto</label>
                        <input type="checkbox" value= "ketogenic" name="ketogenic" onChange={(e) =>handleCheck(e)} className={crear.input}/>
                    
                        <button type="submit" className={crear.boton} disabled={Object.keys(errores).length}>Crear receta</button>
                </div>
            </form>
            <Link to = '/home'><button className={crear.back}>Volver a inicio</button></Link>
        </div>
        </React.Fragment>
    )
}