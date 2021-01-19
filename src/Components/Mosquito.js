import React from 'react';
import mosquito from '../images/mosquito.png'


class Mosquito extends React.Component {
    
 
    
    render() {
        return(
            <div className = 'mosquito'>
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        )    
    }
    
}
export default Mosquito;