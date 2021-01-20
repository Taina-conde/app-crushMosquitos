import React from 'react';
import mosquito from '../images/mosquito.png'
    
function Mosquito() {
   //TODO: define height and width depending on the size of the window
        const height = 1000
        const width = 1000
        let x = Math.floor(Math.random()*width) - 90 
        let y = Math.floor(Math.random()*height) - 90
         x = x < 0 ? 0 : x
         y = y < 0 ? 0 : y

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
        return(
            <div className = {'mosquito' + Math.ceil(Math.random()*3).toString() + " " + side} style = {styles}>
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        )      
}
export default Mosquito;