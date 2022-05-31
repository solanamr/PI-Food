import React from "react";

export default function Card({name, dieta, imagen, id}){
console.log(dieta)

    return(
        <React.Fragment>
            <div>
                <h2>{name}</h2>
                <h4>{dieta}</h4>
                <br />
                <img src={imagen} alt="a" />
            </div>
        </React.Fragment>
    )
}