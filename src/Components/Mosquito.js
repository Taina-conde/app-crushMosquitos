import React from 'react';
import mosquito from '../images/mosquito.png'
    
function Mosquito (props) {

   //TODO: define height and width depending on the size of the window
        const height = window.innerHeight
        console.log("height: ",height)
        
        const width = window.innerWidth
        console.log("width: ", width)
        let x = Math.floor(Math.random()*width) - 190 
        let y = Math.floor(Math.random()*height) - 190
         x = x < 0 ? 0 : x
         y = y < 0 ? 0 : y
         console.log('x', x)
         console.log('y', y)

        let side = ""
        switch (Math.ceil(Math.random()*2)) {
            case 1 :
                side = "side1"
                break;
            case 2:
                side = "side2"
                
        }
        const styles = {
            position: 'absolute',
            left: x, 
            top: y
        }

        function handleClick() {
            props.onClickMosquito()

        }
        return(
            <div 
                className = {'mosquito' + Math.ceil(Math.random()*3).toString() + " " + side} 
                style = {styles}
                onClick = {handleClick}
            >
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        )      
}
export default Mosquito;