import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { recipeByName } from '../../actions/actions'


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault(e)
        setName(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault(e)
        dispatch(recipeByName(name))
        // setName({
        //     name: ""
        // })
    }
    return(
        <React.Fragment>
            <input type="text" placeholder="Buscar aquí" onChange={(e) => handleInputChange(e)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
        </React.Fragment>
    )
}