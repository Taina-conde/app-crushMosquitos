import React, {Component} from 'react';

class InitialMenu extends Component {
    state = {
        value: ""
    }
    render() {
        return (
            <div className= "container">
                <div className = "row">
                    <h1 className = "col display-1">Crush the Mosquitos</h1>
                </div>
                <div className = "row">
                    <form>
                        <div className = "form-group">
                            <select 
                                className ="form-control" 
                                id="difficultyLevel"
                                value = {this.state.value}
                                onChange = {(event) => this.handleSelect(event.target.value) }
                            >
                                <option value="level">
                                    --Level of difficulty--
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
                            <button 
                                type= "button"
                                className = "btn btn-success"
                                onClick = {() => this.handleBtnClick()}
                            > Play
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
export default InitialMenu;