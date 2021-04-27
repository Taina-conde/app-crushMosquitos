import React from 'react'
import gameOver from '../images/game_over.png'

export default function InitialMenu(props) {
    
    if (props.title) {
        return (
        <div className = 'row title-row align-items-center'>
            <h1 className = "col display-1 text-white">{props.title}</h1>
        </div>
        )
    }
                
    if (props.image) {
        return (
           <div className = 'row d-flex flex-column align-items-center'>
                <img className = 'col-6 img-fluid' src = {gameOver} alt = 'gameOver'/>
                {props.subtitle && 
                    <h1 className = "col display-6 text-white mb-5">{props.subtitle}</h1>
                }
                
            </div>  
        )
    } 
    
}

