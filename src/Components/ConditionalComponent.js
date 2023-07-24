import { useState } from "react";
export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true); //functional state. display = var, setDisplay = setter
    let output; //condional rendering using a element variable
    const show = () => {
        setDisplay(false); 
    }
    const hide = () => {
        setDisplay(true); 
    }
    if(display) { 
        
           output = <div>
                <h3>HI</h3>
                <button onClick={show}>Show</button>
             </div>
      
    }
    else {
        output = <div>
        <h3>Bye</h3>
        <button onClick={hide}>hide</button>
     </div>
    }
    return <div>{output}</div> //conditional rendering with only 1 return clean code
    
}


/*
Ternary Conditional

return display ? 

(<div><h3>HI</h3></div>)
:
(<div><h3>Bye</h3></div>)

everything before the colon is rendered if display = true
everything after is displaed if it is false
*/