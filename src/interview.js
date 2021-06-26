// 3 buttons
// increment
// decrement
// reset count to 0
// display count

import React from 'react';

class Interview extends React.Component{
    state = {
        count: 0
    }
    
    timer = undefined

    stateChanger = () => {
        this.setState({ count: this.state.count+1 })
    }

    componentDidMount(){
        this.timer = setInterval(this.stateChanger, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    clickHandler = (event) => {
        //console.log("in click handler")
        //console.log(event.target.value)
        let change = event.target.value
        console.log(change)
        if (change === "increase") {
            this.setState({
                count: this.state.count + 1
            })
        } else if (change === "decrease") {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            this.setState({
                count: 0
            })
        }
    }

    render(){
        return(
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.clickHandler} value="increase">increase</button>
                <button onClick={this.clickHandler} value="decrease">decrease</button>
                <button  onClick={this.clickHandler} value="reset">reset</button>
            </div>
        )
    }
}

export default Interview;