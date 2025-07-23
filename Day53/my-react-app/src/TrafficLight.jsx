import React, {useState, useEffect} from "react"

const LIGHTS = {
        red : "red",
        green : "green",
        yellow : "yellow"
    }

function TrafficLight(){


    

    const [active, setActive] = useState(LIGHTS.yellow);
    const [mode, setMode] = useState("manual");


function handleAutoBtn(){
 if(mode == "manual"){
    setMode("auto");
 };

}

    useEffect(()=>{
        if(mode !== "auto"){return};
        let timeOutId;

        switch(active){
            case LIGHTS.red : 
            timeOutId = setTimeout(()=>{
                setActive(LIGHTS.yellow);
            },4000);
            break;

            case LIGHTS.yellow : 
            timeOutId = setTimeout(()=>{
                setActive(LIGHTS.green);
            },1000);
            break;

            case LIGHTS.green : 
            timeOutId = setTimeout(()=>{
                setActive(LIGHTS.red);
            },3000);
            break;

            
        }

        return()=> clearInterval(timeOutId)

    }, [active, mode])


    return(
        <>
        <h1>Traffic Light</h1>
        <div className="btn-controls">
            <button onClick={()=>setMode("manual")}>Manual</button>
            <button onClick={handleAutoBtn}>Auto</button>

        </div>
        <div className="container">
            <div className="lights red" 
                style = {active !== LIGHTS.red ? {opacity : .3} : null}>
                </div>
            <div className="lights yellow"
                style = {active !== LIGHTS.yellow ? {opacity : .3} : null}>
            </div>
            <div className="lights green"
                style = {active !== LIGHTS.green ? {opacity : .3} : null}>
            </div>
        </div>
        </>
    );
}



export default TrafficLight 