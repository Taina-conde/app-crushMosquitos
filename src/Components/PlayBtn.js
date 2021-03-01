import React from 'react';
import { Link } from 'react-router-dom';

function PlayBtn(props) {
    const { difficulty } = props
    return (
        <div className = 'col'>
            <Link to = "/game">
                <button 
                    type= "button"
                    className = "btn btn-danger btn-lg"
                    disabled = {
                        difficulty === "" 
                        ? true
                        : false
                    }
                > Play </button>
            </Link>
        </div>
    )
}
export default PlayBtn;