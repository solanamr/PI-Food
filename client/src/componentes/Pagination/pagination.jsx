import React from 'react';


export default function Pagination({recPorPag, allRecipes, paginado}){

    const pageNumbers = []
    
    for (let i = 0; i <= Math.ceil(allRecipes/recPorPag); i++) {
        pageNumbers.push(i+1)
    }

    return(

        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(n =>{
                    return <li key = {n}>
                        <a onClick={() => paginado(n)}>{n}</a>
                    </li>
                })}
            </ul>
        </nav>
    )


}