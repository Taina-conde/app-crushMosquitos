import React from 'react';
import { useHistory} from 'react-router-dom';

function PlayBtn(props) {
    const history = useHistory();
    const { difficulty } = props;
    function resetGameHandler() {
        props.onResetGame()
        history.push('/game')
    }
    return (
        <div className = 'row'>
<           div className = 'col mt-5'>
            
                <button 
                    type= "button"
                    className = "btn btn-danger btn-lg"
                    disabled = {
                        difficulty === "" 
                        ? true
                        : false
                    }
                    onClick = {resetGameHandler}
                > 
                    Play 
                </button>
            
            </div>
        </div>
        
    )
}
export default PlayBtn;