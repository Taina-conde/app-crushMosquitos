import React, {Component} from 'react';

class InitialMenu extends Component {
    state = {
        value: ""
    }

    handleSelect = (newValue) => {
        this.setState({
            value: newValue
        })
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
                            <div className = "input-group">
                                <div className = "input-group-prepend">
                                    <label className = "input-group-text" for = "difficultyLevel">Level of difficulty</label>
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