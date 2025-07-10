const inputBox = document.getElementById("input");
const listContainer = document.getElementById("container");
const brief = document.getElementById('brief');
const filterElem = document.getElementById('filter');

let tasks = [];
let id = 1;

// Load tasks from local storage when the page loads
tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Ensure IDs are unique and increment correctly after loading
if (tasks.length > 0) {
    const maxId = Math.max(...tasks.map(task => task.id));
    id = maxId + 1;
}

// This timeout is for the summary message
let summaryTimeoutId = null;

function addTask() {
    if (inputBox.value.trim() === "") {
        window.alert('You must enter a task!');
        return;
    }

    const newTask = {
        id: id++,
        task: inputBox.value.trim(),
        completed: false
    };

    tasks.push(newTask);
    inputBox.value = "";

    saveData();
    filterTask();
}

function displayTask(filteredTasks = tasks) {
    listContainer.innerHTML = "";

    if (filteredTasks.length === 0) {
        listContainer.innerHTML = "<p>No tasks to show for this filter.</p>";
        return;
    }

    filteredTasks.forEach(item => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;

        if (item.completed) {
            li.classList.add('completed-task');
        }

        checkbox.addEventListener('change', () => {
            item.completed = checkbox.checked;
            saveData();
            filterTask();
        });

        const taskText = document.createTextNode(" " + item.task);

        const span = document.createElement('span');
        span.innerHTML = "X";
        span.addEventListener('click', () => {
            tasks = tasks.filter(task => task.id !== item.id);
            saveData();
            filterTask();
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

function summary(currentTasks) {
    if (summaryTimeoutId) {
        clearTimeout(summaryTimeoutId);
    }

    brief.innerHTML = "";

    const total = currentTasks.length;
    const completed = currentTasks.filter(task => task.completed).length;
    const remaining = total - completed;

    const p = document.createElement('p');
    p.textContent = `You currently have ${total} task${total !== 1 ? 's' : ''}. ` +
                    `${completed} ${completed === 1 ? 'is' : 'are'} completed, and ` +
                    `${remaining} ${remaining === 1 ? 'task remains' : 'tasks remain'}. ` +
                    `Keep going, You're making progress!`;
    brief.appendChild(p);

    summaryTimeoutId = setTimeout(() => {
        brief.innerHTML = "";
    }, 3000);
}

function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterTask() {
    const filterValue = filterElem.value;
    let filteredTasks = [];

    if (filterValue === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (filterValue === 'remaining') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else { // 'all-task'
        filteredTasks = tasks;
    }
    displayTask(filteredTasks);
}

filterElem.addEventListener('change', filterTask);

function sortTasks() {
    // Sort tasks alphabetically by their 'task' property
    tasks.sort((a, b) => a.task.localeCompare(b.task));
    saveData();
    filterTask(); // Re-render after sorting
    alert("Tasks sorted alphabetically!"); // Provide feedback
}

// Initial call to filterTask to display tasks based on the default filter
filterTask();