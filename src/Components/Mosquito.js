import React from 'react';
import mosquito from '../images/mosquito.png'


function Mosquito(props) {
    return(
        <div >
            <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
        </div>
    )
}
export default Mosquito;