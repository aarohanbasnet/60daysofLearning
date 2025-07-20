import React, {useState} from "react"

function ToDoList(){

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleAddTask(){
        setTask(t =>[...t, newTask]);
        setNewTask("");
    }

    function handleTaskChange(event){
        setNewTask(event.target.value);
    }

    function handleRemoveTask(index){
        const updatedTasks = task.filter((_, i)=> i !==index);
        setTask(updatedTasks);

    }
    return(
        <div>
            <h1>Your to do's</h1>
            <ul>
                {task.map((task, index)=> 
                <li key={index}
                    onClick={()=> handleRemoveTask(index)}
                
                >{task}</li>)}
            </ul>
            <input type="text" placeholder="Enter Task" value={newTask} onChange={handleTaskChange}/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default ToDoList