import React, {useEffect, useState} from "react";

const LIGHTS ={
        red : 'red',
        green : 'green',
        yellow : 'yellow'
    }

function TrafficLight(){

    const [active, setActvie] = useState(LIGHTS.yellow);
    const [nextLight, setNextLight] = useState(LIGHTS.green);

    //initialize timing

    useEffect(()=>{
             //either switch or  if else
        let timeOutID;
                switch(active) {
                    case LIGHTS.red:
                        timeOutID = setTimeout(()=>{
                            setNextLight(LIGHTS.green);
                            setActvie(LIGHTS.yellow);
                            
                        }, 4000)
                        break;

                         case LIGHTS.green:
                         timeOutID =  setTimeout(()=>{
                            setNextLight(LIGHTS.red);
                                setActvie(LIGHTS.yellow);
                            },3000)
                            break;
                
                    
                        case LIGHTS.yellow:
                         timeOutID =  setTimeout(()=>{
                                setActvie(nextLight);
                            }, 500)
                            break;

                         
                        default: break;
    }       

    return() => clearTimeout(timeOutID);
         
    }, [active]);

    
    return(
        <>
        <h1>Traffic Light</h1>
        <div className="container">
           <div className="light green"
                style={active !== LIGHTS.green ? {opacity: .3} : null}></div>
           <div className="light yellow"
                style={active !== LIGHTS.yellow ? {opacity: .3} : null}></div>
           <div className="light red"
                style={active !== LIGHTS.red ? {opacity: .3} : null}></div>
        </div>
        </>
    );
}

export default TrafficLight