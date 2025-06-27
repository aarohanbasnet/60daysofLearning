// document.addEventListener("keydown", event =>{
//     console.log(`KeyDown = ${event.key}`);
// });

// document.addEventListener("keyup", event =>{
//     console.log(`Keyup = ${event.key}`);
// });

const myBox = document.getElementById("myBox");


document.addEventListener("keydown", event => {
    document.body.style.backgroundColor = "black";
    myBox.textContent = "🛸";
    myBox.style.backgroundColor = "black";
});

document.addEventListener("keyup", event => {
    document.body.style.backgroundColor = "salmon";
    myBox.textContent = "👽";
    myBox.style.backgroundColor = "salmon";
});

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){

        event.preventDefault(); //prevents default behaviour of the key

        switch(event.key){
            case  "ArrowUp" :
                y -= moveAmount;
                break;

            case  "ArrowDown" :
                y += moveAmount;
                break;

            case  "ArrowRight" :
                x += moveAmount;
                break;
            
            case  "ArrowLeft" :
                x -= moveAmount;
                break;   
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})
