import React, {useContext} from "react";
import {UserContext} from "./ComponentA copy";


function ComponentD(){

    const user = useContext(UserContext);
    return(
        <>
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Great ${user}! You avoided Props Drill`}</h2>
        </div>
        </>
    );
}

export default ComponentD