const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(input.value.trim() == ''){
        alert("You must add some task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
     
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", event => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();