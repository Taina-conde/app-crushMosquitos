import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';


const Timer = (props) =>  {
    const history = useHistory()
    const [time, setTime] = useState(15);
    
    useEffect(() => { 
        const timer = setInterval( 
                () => {
                    if (time > 0 && props.lives > 0) {
                              console.log('aqui')
                              console.log('lives', props.lives)  
                        setTime(time-1)
                    } else {
                        setTime(15)
                        history.replace('/victory')
                        
                    }
                }, 
            1000) 
        return () => clearInterval(timer)  
    }, [time,props.lives, history ]) 
   
    
        
        return (
            <div className = "timer"> 
                Time:{time > 0 && time}
            </div>
        )
    
    
}

export default Timer;