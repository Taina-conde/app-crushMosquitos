import React from 'react';
import { Link } from 'react-router-dom';

function PlayBtn(props) {
    return (
        <div>
            <Link to = "/game">
                <button 
                    type= "button"
                    className = "btn btn-danger btn-lg"
                > Play </button>
            </Link>
        </div>
    )
}
export default PlayBtn;