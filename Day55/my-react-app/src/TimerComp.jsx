import React, {useState, useEffect, useRef} from "react";


export default function TimerComp(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(isRunning){
         intervalIdRef.current =  setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10);
        }

        return() =>{
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function stop(){
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor((elapsedTime / (1000*60))%60);
        let seconds = Math.floor((elapsedTime / (1000))%60);
        let milliseconds = Math.floor((elapsedTime % 1000)/10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    return(<>
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button className="start-button" onClick={start}>Start</button>
            <button className="stop-button" onClick={stop}>Stop</button>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    </div>
    </>);
}
