let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;

for(list of lists){
    list.addEventListener("dragstart", function(e){
        selected = e.target; //which elem is selected when dragging
        selected.classList.add("dragging");
    });

    list.addEventListener("dragend", function(e){
        selected.classList.remove("dragging");
    });
}

rightBox.addEventListener("dragover", function(e){
    e.preventDefault();
});

rightBox.addEventListener("drop", function(e){
    if(selected){
        rightBox.appendChild(selected)
    selected = null; 
}
} );

leftBox.addEventListener("dragover", function(e){
    e.preventDefault();
});

leftBox.addEventListener("drop", function(e){
    if(selected){
        leftBox.appendChild(selected)
    selected = null; 
}
} );


