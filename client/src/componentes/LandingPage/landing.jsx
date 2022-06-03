import React from 'react';
import { Link } from 'react-router-dom';
import lg from '../LandingPage/lg.module.css'


export default function LandingPage(){
    return(
         <React.Fragment>
            <div className={lg.container}>
                <div className={lg.h1}>
                     <h1>Let's cook!</h1>
                </div>
                        <Link to = '/home'>
                            <button className={lg.boton}>Enter</button>
                         </Link>   
            </div>
         </React.Fragment>
    )
}

