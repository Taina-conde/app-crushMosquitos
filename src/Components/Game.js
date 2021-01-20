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
        const {redirect, mosquitoExists, difficulty, onClickMosquito, lives } = this.props
        
        if (redirect === true ) {
            return <Redirect to = '/gameOver'/>
        }
        
        return (
           
            <div>
                {mosquitoExists && 
                    <Mosquito
                        difficulty = {difficulty}
                        onClickMosquito = {onClickMosquito}
                    
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