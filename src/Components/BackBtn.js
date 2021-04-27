import React from 'react';
import { useHistory } from 'react-router-dom';

function BackBtn(props) {
    const history = useHistory();
    function resetGameHandler() {
        props.onResetGame();
        history.replace('/')
    }
    return (
        <div className = 'mt-5'>
            
                <button 
                    type= "button"
                    className = "btn btn-danger btn-lg"
                    onClick = {resetGameHandler}
                > Back to main menu </button>
            
        </div>
    )
}
export default BackBtn;