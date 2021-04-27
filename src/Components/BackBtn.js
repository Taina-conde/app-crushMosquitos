import React from 'react';
import { Link } from 'react-router-dom';

function BackBtn() {
    return (
        <div className = 'mt-5'>
            <Link to = "/">
                <button 
                    type= "button"
                    className = "btn btn-danger btn-lg"
                    
                > Back to main menu </button>
            </Link>
        </div>
    )
}
export default BackBtn;