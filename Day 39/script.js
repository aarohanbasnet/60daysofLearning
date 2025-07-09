
const inputBox = document.getElementById("input");
const listContainer = document.getElementById("container");
const brief = document.getElementById('brief');

let tasks = [];
let id = 1;

function addTask(){
    if(inputBox.value.trim() === ""){
        window.alert('You must enter the task');
    }
    else{
        const newTask = {
            id : id++,
            task : inputBox.value,
            // dueDate : dueDate,
            completed : false
        };

        const updatedTask = [...tasks, newTask];

        tasks = updatedTask;
        inputBox.value = "";
        console.log(tasks);
    }

    displayTask();
    // summary(tasks);
    
}

function displayTask(){
    listContainer.innerHTML = "";

    tasks.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.task;
        // let span = document.createElement('span');
        // // span.innerHTML = `<input type = "checkbox"/>`
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // if(checkbox.checked){
        //     item.completed = true;
        // }
        // span.appendChild(checkbox);
        //  listContainer.appendChild(span);
         listContainer.appendChild(li);   
    });
   
}

console.log(tasks.length);

function summary(tasks){
    brief.innerHTML = "";
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const remaining = total - completed;

    const p = document.createElement('p');
    p.textContent = `You currently have ${total} task${total !== 1 ? 's' : ''}.
    ${completed} ${completed == 1 ? 'is' : 'are'} completed, and ${remaining} ${remaining == 1 ? 'task remains' : 'tasks remain'}.
    Keep going, You're making progress!`;
    brief.appendChild(p);
    
    
}