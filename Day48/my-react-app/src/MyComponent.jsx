import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmpolyed, setEmployedStuatus] = useState(false);

    const updateName = ()=> {
        setName("SpongeBob");
    }

    const increaseAge = ()=>{
        setAge(age+1);
    }

    const toggleEmployedStatus = ()=>{
        setEmployedStuatus(!isEmpolyed);
    }

    return(
        <div>
            <p>Name :{name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>age :{age}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <p>Employed :{isEmpolyed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent