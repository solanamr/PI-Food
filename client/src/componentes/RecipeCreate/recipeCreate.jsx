import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { geDieta, postReceta } from '../../actions/actions';
import { useDispatch, useSelector } from "react-redux";

export default function RecipeCreate(){

     const dispatch = useDispatch()
    // const refresh = useNavigate()
    // const dietas = useSelector((state) => state.diets)

    const [input, setInput] = useState({
        name: "",
        resumen: "",
        nivelSalud: "",
        imagen: "",
        pasos: "",
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
        dispatch(postReceta(input))
        alert("¡Tu receta fue creada con éxito!")
        setInput({
            name: "",
            resumen: "",
            nivelSalud: "",
            imagen: "",
            pasos: "",
            dieta: []
        })
        // refresh.push('/home')
    }

    return(
        <React.Fragment>
            <Link to = '/home'><button>Volver a página de inicio</button></Link>
            <h1>A cocinar</h1>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={input.name} name= "name" onChange={(e)=>handleChange(e)}/>


                    <label htmlFor="">Resumen</label>
                    <input type="text" value={input.resumen} name="resumen" onChange={(e)=>handleChange(e)}/>


                    <label htmlFor="">Nivel de saludable</label>
                    <input type="number" value={input.nivelSalud} name = "nivelSalud" onChange={(e)=>handleChange(e)}/>


                    <label htmlFor="">Imagen</label>
                    <input type="text" value={input.imagen} name="imagen" onChange={(e)=>handleChange(e)}/>


                    <label htmlFor="">Pasos a seguir</label>
                    <input type="text" value={input.pasos} name="pasos" onChange={handleChange}/>


                    <label htmlFor="">Dietas</label>
                    <label htmlFor="">Gluten Free</label>
                    <input type="checkbox" value= "gluten free" name="gluten free" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Dairy Free</label>
                    <input type="checkbox" value= "dairy free" name="dairy free" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Lacto-ovo vegetarian</label>
                    <input type="checkbox" value= "lacto ovo vegetarian" name="lacto ovo vegetarian" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Vegano</label>
                    <input type="checkbox" value= "vegan" name="vegan" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Paleo</label>
                    <input type="checkbox" value= "paleolithic" name="paleolithic" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Primitiva</label>
                    <input type="checkbox" value= "primal" name="primal" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Whole 30</label>
                    <input type="checkbox" value= "whole 30" name="whole 30" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">FODMAP friendly</label>
                    <input type="checkbox" value= "fodmap friendly" name="fodmap friendly" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Vegetariano</label>
                    <input type="checkbox" value= "vegetarian" name="vegetarian" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Pescatariano</label>
                    <input type="checkbox" value= "pescatarian" name="pescatarian" onChange={(e) =>handleCheck(e)}/>
                    <label htmlFor="">Keto</label>
                    <input type="checkbox" value= "ketogenic" name="ketogenic" onChange={(e) =>handleCheck(e)}/>
                    
                    <button type="submit">Crear receta</button>
                </div>
            </form>
        </React.Fragment>
    )
}