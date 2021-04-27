import React from 'react';
import { Link } from 'react-router-dom';

function PlayBtn(props) {
    const { difficulty } = props
    return (
        <div className = 'row'>
<div className = 'col mt-5'>
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
        </div>
        
    )
}
export default PlayBtn;