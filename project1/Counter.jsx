import { useState } from "react";

function Counter(){
    // let count = 20

    const [count,setcount]= useState(0);
    function handleclick(){
        setcount(count+1);
    }

    return(
        <> 
         <h2>Count : {count}</h2>
        <button onClick={handleclick}>Click me</button>
        </>
      
    )
}

export default Counter;