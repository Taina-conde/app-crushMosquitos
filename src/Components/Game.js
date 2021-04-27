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
                    if (lives === 0 ) {
                        clearInterval(createMosquito)
                    }
                    onToggleMosquito()
         
                }, time
            )
        }
        
    }
    
    
    
    render() {
        const { 
            mosquitoExists, 
            difficulty,  
            lives, 
            isCrushed, 
            onClickMosquito,
            onLoseLives 
        } = this.props
        
        if (lives === 0 ) {
            return <Redirect to = '/game-over'/>
        }
        
        return (
           
            <div>
                {mosquitoExists && 
                    <Mosquito
                        difficulty = {difficulty}
                        onClickMosquito = {onClickMosquito}
                        isCrushed = {isCrushed}
                        onLoseLives = {onLoseLives}
                        mosquitoExists = {mosquitoExists}
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