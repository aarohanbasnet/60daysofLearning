import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Aarohan");
    //State variable is here so this should be the 
    //provider component

    //STEPS
    // 1.import createContext
    // 2. store cresteContext
    //<MyContext.provider value = {value}>
    //<Child/>
    //</MyContext.provider>

    //CONSUMER COMPONENT
    //1. import useContext
    //2. import {MyContext} from "./"
    //3. const value = useContext(MyContext);

    return(
        <>
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
            
        </div>
        </>
    );
}

export default ComponentA