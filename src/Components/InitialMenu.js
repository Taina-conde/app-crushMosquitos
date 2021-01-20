import React, {Component} from 'react';
import gameOver from '../images/game_over.png'

class InitialMenu extends Component {
    state = {
        value: ""
    }

    handleSelect = (newValue) => {
        this.setState({
            value: newValue
        }, () => {
            this.props.onSelectDifficulty(this.state.value);
        })
    }
   
    render() {
        return (
            <div className= "container">
                {this.props.title &&
                    <div className = "row">
                        <h1 className = "col display-1 text-white">{this.props.title}</h1>
                    </div>
                }
                
                {this.props.image && 
                    <div className = "row justify-content-center">
                        <img className = 'img-fluid' src = {gameOver} alt = 'gameOver'/>
                    </div>     
                }

                {this.props.subtitle &&
                    <div className = 'row'>
                        <h1 className = "col display-6 text-white">{this.props.subtitle}</h1>
                    </div>
                }
                
                <div className = "row justify-content-center">
                    <form>
                        <div className = "form-group">
                            <div className = "input-group">
                                <div className = "input-group-prepend">
                                    <label className = "input-group-text" htmlFor = "difficultyLevel">Level of difficulty</label>
                                </div>
                                <select 
                                    className ="form-control" 
                                    id="difficultyLevel"
                                    value = {this.state.value}
                                    onChange = {(event) => this.handleSelect(event.target.value) }
                                >
                                    <option value="level">
                                        --choose--
                                    </option>
                                    <option value="easy">
                                        Easy
                                    </option>
                                    <option value="normal">
                                        Normal
                                    </option>
                                    <option value="hard">
                                        Hard
                                    </option>
                                </select>
                            
                            </div>
                            
                            

                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
export default InitialMenu;