import React from 'react';
import mosquito from '../images/mosquito.png'


class Mosquito extends React.Component {
    componentDidMount() {
        const {time, onMosquitoExists, lives} = this.props       
        const createMosquito = setInterval (
            () => {
                onMosquitoExists()
                if (lives === 0) {
                    clearInterval(createMosquito)
                }
            }, time
        )
    }
    
    render() {
        return(
            <div className = 'mosquito'>
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        )    
    }
    
}
export default Mosquito;