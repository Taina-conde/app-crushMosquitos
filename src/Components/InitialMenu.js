import React from 'react'
import gameOver from '../images/game_over.png'

export default function InitialMenu(props) {
    return(

        <div className = 'col d-flex flex-column'>
            {props.title &&
                <div >
                    <h1 className = "display-1 text-white">{props.title}</h1>
                </div>
            }
            
            {props.image && 
                <div >
                    <img className = 'img-fluid' src = {gameOver} alt = 'gameOver'/>
                </div>     
            }

            {props.subtitle &&
                <div >
                    <h1 className = "display-6 text-white">{props.subtitle}</h1>
                </div>
            }
        </div>
    )
}

