//---------Example H1---------

//STEP 1 CREATE THE ELEMENT 
const newH1 = document.createElement("h1"); //passing the type of elem we want to create, here H1

//STEP 2 ADD ATTRIBUTES / PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1"; //adding extra properties
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1); //when we append an element to a parent this new elem is the last child
document.body.prepend(newH1); 

//to be first child of the 

//to append new H1 inside box 1 
document.getElementById("box1").prepend(newH1); //when appending to box1 newH1 is the last child of box1
                                            // for it to be first child we prepend
// document.getElementById("box2").append(newH1);
// document.getElementById("box3").append(newH1);


//inorder to sandwitch the newH1 between Box 1 and Box 2
//create a reference

const box2 = document.getElementById("box2");
//.insertBefore(newElement, Current Element);
document.body.insertBefore(newH1, box2);

//if elements did'nt have id, we use querySelectorAll("".box"); all elem with class box

// const boxes = document.querySelectorAll(".box"); // this returns NODELIST
// document.body.insertBefore(newH1, boxes[0]); //box[0] gives box[1]



//REMOVE HTML ELEMENT
 //first we need to find the location here,new H1 is contained within body
 //if it was in box1 we would use elementselector to get elem and use it 

//document.body.removeChild(newH1); //select the parent of that elem and follow it with removechild method