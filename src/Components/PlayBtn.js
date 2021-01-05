import React from 'react';
import { Link } from 'react-router-dom';

function PlayBtn(props) {
    return (
        <div>
            <Link>
                <button 
                    type= "button"
                    className = "btn btn-success"
                > Play </button>
            </Link>
        </div>
    )
}
export default PlayBtn;