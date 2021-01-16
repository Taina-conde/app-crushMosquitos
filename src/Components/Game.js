import React, {Component} from 'react';
import GamePanel from './GamePanel';
import Mosquito from './Mosquito';
import { Redirect } from 'react-router-dom';

class Game extends Component {
    state = {
        mosquitoTime: [
            {
              id: "easy",
              time: 2000
            },
            {
              id: "normal",
              time: 1300
            },
            {
              id: "hard",
              time: 900
            }
        ],
        mosquitoExists: true,
        redirect: false
    }
    handleMosquitoExists = () => {
        this.setState({
            mosquitoExists: !this.state.mosquitoExists
        }, () => {
            if (this.props.lives === 0 ){
                    this.setState({
                    redirect: true
                })
            }
        })
    }
    handleClick = () => {
        this.props.onClickMosquito()
    }
    
    render() {
        const { difficulty } = this.props
        const selectedLevel = this.state.mosquitoTime.filter((diffLevel) => difficulty === diffLevel.id)
        const time = selectedLevel.time
        
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
        if (this.state.redirect === true ) {
            return <Redirect to = '/gameOver'/>
        }
        
        return (
           
            <div>
                {this.state.mosquitoExists && 
                    <Mosquito
                        difficulty = {this.props.difficulty}
                        onClickMosquito = {this.props.onClickMosquito}
                        style = {styles}
                        time = {time}
                        onMosquitoExists ={this.handleMosquitoExists}
                        onClick = {this.handleClick}
                    />
                }
                <GamePanel
                    lives = {this.props.lives}
                />

            </div>
        )
    }
}
export default Game;