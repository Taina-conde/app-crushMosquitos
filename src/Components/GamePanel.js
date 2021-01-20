import React from 'react';
import Timer from './Timer';
import Lives from './Lives';

function GamePanel(props) {
    return (
        <div className = 'panel'>
            <Timer
                lives = {props.lives}
            />
            <Lives
                lives = {props.lives}
            />
        </div>
    )
}

export default GamePanel;