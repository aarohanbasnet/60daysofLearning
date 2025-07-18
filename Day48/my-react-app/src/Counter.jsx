
import  {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increase = ()=>{
        setCount(count + 1);
    };

    const decrease = ()=>{
        setCount(count - 1);
    };

    const reset = () =>{
        setCount(0);
    };

    return(
        <div className="count-container">
            <h1 className="count-display">{count}</h1>
            <button className="counter-btn" onClick={increase}>Increase</button>
            <button className="counter-btn" onClick={decrease}>Decrease</button>
            <button className="counter-btn" onClick={reset}>Reset</button>
        </div>
    );

}

export default Counter;