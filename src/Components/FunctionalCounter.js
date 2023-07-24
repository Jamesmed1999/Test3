import {useState} from "react";

function FunctionalCounter () {
    const [counter, setCounter] = useState(0) //this.state equivlant for functions with useState state var with setter method

    const increment = () => { //ES6 function
        setCounter(counter+1) 
    }
    const decrement = () => { //ES6 function
        setCounter(counter-1) 
    }
 return (
    <center>
<div>
     <div>Functional Counter Value: {counter}</div>
<div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
</div>
</div>
</center>
 );
}
export default FunctionalCounter;