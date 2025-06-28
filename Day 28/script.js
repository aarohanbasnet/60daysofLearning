//Callback hell 
 
//DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN 
//3. TAKE OUT THE TRASH

// function walkDog(callback){

//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback();
//     }, 1500);

    
// }

// function cleanKitchen(callback){

//     setTimeout(() => {
//         console.log("You clean the kitchen 🧹");
//         callback();
//     },500);

    
// }


// function takeOutTrash(callback){

//     setTimeout(()=>{
//         console.log("You take out the trash 🗑️");
//         callback();
//     },2500);

    
// }

// walkDog(() =>{
//     cleanKitchen(() =>{
//         takeOutTrash(()=>
//             console.log("You finished all the chores!"));
//     });
// });


//PROMISES

function walkDog(){

    return new Promise((resolve, reject)=> {
         setTimeout(() => {
        const dogwalked = true;
        if(dogwalked){
        resolve("You walk the dog 🐕");           
        }
        else{
            reject("You didn't walk the dog");
        }
    }, 1500);
    })

    
}

function cleanKitchen(){

    return new Promise((resolve, reject)=> {
        setTimeout(() => {

        const kitchenCleaned = true;
        if(kitchenCleaned){
        resolve("You clean the kitchen 🧹");           
        }
        else{
            reject("You didn't clean the kitchen");
        }
    },500);

    })
    
}


function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

       const trashTaken = true;
        if(trashTaken){
        resolve("You take out the trash 🗑️");           
        }
        else{
            reject("You didn't take out the trash");
        }
    },2500);

    })
    
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value =>{console.log(value); console.log("You finished all the chores!")})
        .catch(error => console.error(error));
    