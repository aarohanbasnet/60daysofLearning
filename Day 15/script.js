let rollbtn = document.getElementById("btn");
let display = document.getElementById("random");
let min = 1;
let max = 6;

rollbtn.onclick = function(){
    randomNumber = Math.floor(Math.random()*6)+1;
    display.textContent = randomNumber;
}

//IF statements
/*If the conditon is true execute some code else execute
another code  */

let time = 9;
if(time > 12){
    console.log("Good Afternoon");
}
else{
    console.log("Good Morning");
}

let age = 25;
hasLicense = false;

if(age>16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have a license");
    }
    else{
        console.log("Go get a License")
    }
}
else{
    console.log("You must be 16+ to have a driving license")
}

//checked property
// const myCheckbox = document.getElementById("mycheckbox");
// const visatbtn = document.getElementById("visaBtn");
// const masterCard = document.getElementById("masterCard");
// const payPalBtn = document.getElementById("paypal");
// const mySubmit = document.getElementById("mySubmit");
// const paymentResult = document.getElementById("paymentresult");
// const subresult = document.getElementById("subresult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subresult.textContent = `You are Subscribed`;
//     }
//     else{
//         subresult.textContent = `You are not Subscribed`;
//     }

//     if(visatbtn.checked){
//         subresult.textContent = `You are paying with visa`;
//     }
//     if(masterCard.checked){
//         subresult.textContent = `You are paying with MasterCard`;
//     }
//     if(payPalBtn.checked){
//         subresult.textContent = `You are paying with Paypal`;
//     }
// }


let score = 40;
let letterGrade = "";

switch(true){ 
    case score >=90 : 
    letterGrade = "A";
    break;
    case score >=80 : 
    letterGrade = "A-";
    break;
    case score >=70 : 
    letterGrade = "B";
    break;
    case score >=60 : 
    letterGrade = "B-";
    break;
    default : 
    letterGrade = "F";
}

console.log(letterGrade);

