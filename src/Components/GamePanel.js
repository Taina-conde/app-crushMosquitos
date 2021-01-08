import React from 'react';
import Timer from './Timer';
import Lives from './Lives';

function GamePanel(props) {
    return (
        <div className = 'panel'>
            <Timer/>
            <Lives/>
        </div>
    )
}

export default GamePanel;