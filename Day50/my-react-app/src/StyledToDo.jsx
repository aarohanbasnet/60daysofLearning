import React, {useState} from "react"

function StyledToDo(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    
        function handleAddTask(){
            if(newTask.trim() !== ""){
            setTask(t =>[...t, newTask]);
            setNewTask("");
        }
    }
    
        function handleTaskChange(event){
            setNewTask(event.target.value);
        }
    
        function handleRemoveTask(index){
            const updatedTasks = task.filter((_, i)=> i !==index);
            setTask(updatedTasks);
        }

        function moveTaskUp(index){
            if(index > 0){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index-1]] = 
                [updatedTasks[index - 1],updatedTasks[index]];
                setTask(updatedTasks);
            }

        }

        function moveTaskDown(index){

        }


        return(
            <div className="to-do-list">
                <h1>Your to do's</h1>

                <div>
                     <input type="text" placeholder="Enter Task" 
                     value={newTask}
                     onChange={handleTaskChange}/>

                     <button
                      className="add-button"
                      onClick={handleAddTask}>
                        Add Task
                        </button>
                </div>
                <ol>
                    {task.map((task, index)=> 
                    <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button"
                            onClick={()=>handleRemoveTask(index)}>
                                Delete 
                            </button>

                            <button className="move-btn"
                            onClick = {()=> moveTaskUp(index)}>
                              👆
                            </button>

                            <button className="move-btn"
                            onClick = {()=> moveTaskDown(index)}>
                                
                              👇
                            </button>
                    </li>
                    )}
                </ol>
               
                
            </div>
        );
}

export default StyledToDo