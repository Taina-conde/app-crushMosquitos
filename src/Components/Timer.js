import React from 'react';
import { Redirect } from 'react-router-dom';


class Timer extends React.Component {
    state = {
        redirect: false,
        time: 15
    }
    componentDidMount () {
        const timer = setInterval( 
                () => {
                    this.setState({time: this.state.time -1}, () =>{
                        if (this.state.time === 0) {
                            clearInterval(timer);
                            this.setState({redirect: true});
                        }
                    })
                    }, 
            1000)
       
    }
    render() {
        if (this.state.redirect === true ) {
            return <Redirect to = '/victory'/>
        }
        return (
            <div className = "timer"> 
                Time:{this.state.time > 0 && this.state.time}
            </div>
        )
    }
    
}

export default Timer;