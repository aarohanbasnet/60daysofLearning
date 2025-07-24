import React, {useEffect, useRef} from "react"
function MyComponent(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDERED")
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return(
        <>
        <button onClick={handleClick1}>Click Me</button>
        <input ref={inputRef1}/> <br/>

        <button onClick={handleClick2}>Click Me</button>
        <input ref={inputRef2}/> <br/>

        <button onClick={handleClick3}>Click Me</button>
        <input ref={inputRef3}/>
        </>
    );
}

export default MyComponent;