import {Component} from "react";
import ForFun from "./ForFun";


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            
        };
        this.decrement = this.decrement.bind(this); //event binding  #1
    }
    increment = () => { //ES6 function event binding  #1
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        });
    }
    render() {
        return (
            <div id = 'b1'>
                <center>
                    
                <h3>Counter Value is: {this.state.counter} and my name is: {this.props.name}  </h3>
                
                <button onClick={this.increment}> Increment</button>
                <button onClick={this.decrement}> Decrement</button>
                <ForFun/>
                </center>
            </div>
        )
    }
}

export default Counter;