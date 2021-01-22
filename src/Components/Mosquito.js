import React from 'react';
import mosquito from '../images/mosquito.png'

//TODO: define height and width depending on the size of the window
function randomPosition() {
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

     const styles = {
        position: 'absolute',
        left: x, 
        top: y
    }
     return styles

}

function randomSide() {
    let side = ""
    switch (Math.ceil(Math.random()*2)) {
        case 1 :
            side = "side1"
            break;
        case 2:
            side = "side2"
            
    }
    return side
}
function randomClassNum() {
    return Math.ceil(Math.random()*3).toString()
}

    
class Mosquito extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.mosquitoExists === nextProps.mosquitoExists) {
            return false
        }
        return true

    }
  
    componentWillUnmount() {
        const {isCrushed} = this.props
        console.log('unmount')
        
        if (isCrushed === false) {
            
            this.props.onLoseLives()
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        console.log("clicked")
        this.props.onClickMosquito()

    }
    
    render() {
        
        return(
            <div 
                className = {'mosquito' + randomClassNum() + " " + randomSide()} 
                style = {randomPosition()}
                onClick = {this.handleClick}
            >
                <img className = 'img-fluid' src = {mosquito} alt = 'mosquito'/>
            </div>
        ) 

    }


        
}
export default Mosquito;