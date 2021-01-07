import React from 'react';


class Timer extends React.Component {
    state = {
        time: 15
    }
    componentDidMount () {
        setInterval( 
                () => {
                    this.setState({time: this.state.time -1})
                    }, 
            1000)
    }
    render() {
        return (
            <div>
                Time remaining: {this.state.time > 0 && this.state.time}
            </div>
        )
    }
    
}

export default Timer;