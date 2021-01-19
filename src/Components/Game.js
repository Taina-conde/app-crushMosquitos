import React, {Component} from 'react';
import GamePanel from './GamePanel';
import Mosquito from './Mosquito';
import { Redirect } from 'react-router-dom';

class Game extends Component {
   
    componentDidMount() {
        
        const {difficulty, mosquitoTime, onToggleMosquito, lives} = this.props 
        const selectedLevel = mosquitoTime.filter((diffLevel) => difficulty === diffLevel.id)
        if (selectedLevel[0]) {
            const time = selectedLevel[0].time
            const createMosquito = setInterval (
                () => {
                    onToggleMosquito()
                    if (lives === 0 ) {
                        clearInterval(createMosquito)
                    }        
                }, time
            )
        }
        
    }
   
    handleClick = () => {
        this.props.onClickMosquito()
    }
    
    render() {
        const {redirect, mosquitoExists, difficulty, onClickMosquito, time, lives } = this.props
        
        //TODO: define height and width depending on the size of the window
        const height = 1000
        const width = 1000
        let x = Math.floor(Math.random()*width) //- 90 
        let y = Math.floor(Math.random()*height) //- 90
        // x = x < 0 ? 0 : x
        // y = y < 0 ? 0 : y
        const styles = {
            left: x,
            top: y
        }
        if (redirect === true ) {
            return <Redirect to = '/gameOver'/>
        }
        
        return (
           
            <div>
                {mosquitoExists && 
                    <Mosquito
                        difficulty = {difficulty}
                        onClickMosquito = {onClickMosquito}
                        style = {styles}
                        time = {time}
                    
                        onClick = {this.handleClick}
                    />
                }
                <GamePanel
                    lives = {lives}
                />

            </div>
        )
    }
}
export default Game;