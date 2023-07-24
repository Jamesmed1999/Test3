import { useState } from "react";

export default function ForFun() {
    const [display, setDisplay] = useState(true); //functional state. display = var, setDisplay = setter
    let output; //condional rendering using a element variable
    const show = () => {
        setDisplay(false); 
    }
    const hide = () => {
        setDisplay(true); 
    }
    if(display) { 
        
           output = 
                <button onClick={show}>Spurise ;0^</button>

      
    }
    else {
        output = <div>
        <h4>yo wuz up</h4>
        <button onClick={hide}>hide</button>
     </div>
    }
    return <div>{output}</div> //conditional rendering with only 1 return clean code
    
}


