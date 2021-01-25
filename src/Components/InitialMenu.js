import React from 'react'
import gameOver from '../images/game_over.png'

export default function InitialMenu(props) {
    return(

        <div className = 'container'>
            {props.title &&
                <div className = "row">
                    <h1 className = "col display-1 text-white">{props.title}</h1>
                </div>
            }
            
            {props.image && 
                <div className = "row justify-content-center">
                    <img className = 'img-fluid' src = {gameOver} alt = 'gameOver'/>
                </div>     
            }

            {props.subtitle &&
                <div className = 'row'>
                    <h1 className = "col display-6 text-white">{props.subtitle}</h1>
                </div>
            }
        </div>
    )
}

