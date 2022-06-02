import React from 'react';
import { Link } from 'react-router-dom';
import lg from '../LandingPage/lg.module.css'


export default function LandingPage(){
    return(
        <React.Fragment>
            <div className={lg.container}>
                <h1>Let's cook!</h1>
                <Link to = '/home'>
                    <button>Enter</button>
                </Link>   
            </div>
        </React.Fragment>
    )
}

