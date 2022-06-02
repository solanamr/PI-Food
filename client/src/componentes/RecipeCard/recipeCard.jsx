import React from "react";

export default function Card({name,  dieta, imagen, id}){
    return(
        <React.Fragment>
            <div key = {id}>
                <h2>{name}</h2>
                {
                     dieta.map(d => <h4>{ d + " "}</h4>)
                }
                {/* <h4>{diettypes} </h4> */}
                <img src={imagen} alt="a" />
            </div>
        </React.Fragment>
    )
}