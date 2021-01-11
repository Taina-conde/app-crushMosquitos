import React from 'react';
import mosquito from '../images/mosquito.png'


class Mosquito extends React.Component {
    handleClick = () => {
        this.props.onClickMosquito()
    }
    render() {
        return(
            <div
                className = "mosquito" 
                onClick = {() => this.handleClick()} 
            >
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        )    
    }
    
}
export default Mosquito;