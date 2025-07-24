import ComponentD from "./ComponentD";

import React, {useContext} from "react";
import { UserContext } from "./ComponentA copy";

function ComponentC(){

    const user = useContext(UserContext);
    return(
        <>
        <div className="box">
            <h1>Component C</h1>
            <ComponentD/>
            <h2>Bye! {user}</h2>
        </div>
        </>
    );
}

export default ComponentC