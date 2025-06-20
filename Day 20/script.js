//Callbacks

hello(goodbye);
hello(leave);

 function hello(callback){
    console.log("Hello!");
    callback();
 }

 function leave(){
    console.log("Leave!");
 }

 function goodbye(){
    console.log("GoodBye!");
 }

 sum(displayConsole,1,2);

 function sum(callback,x,y){
    let result = x+y;
   callback(result);
 }

 function displayConsole(result){
    console.log(result);
 }

 //forEach

 let numbers = [1,2,3,4,5];
//  numbers.forEach(double);
// numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);


 function display(element){
    console.log(element);
 }

 function double(element, index, array){
    array[index] = element*2;
 }

 function triple(element, index, array){
    array[index] = element*3;
 }

 function square(element, index, array){
    array[index]= Math.pow(element,2);
 }


 let fruits = ["orange", "banana", "coconut", "apple"];

// fruits.forEach(lowerCase);
// fruits.forEach(upperCase);
fruits.forEach(capitalize);
fruits.forEach(display);


 function display(element){
    console.log(element);
 }

 function upperCase(element, index, array){
    array[index] = element.toUpperCase();
 }
 function lowerCase(element, index, array){
    array[index] =element.toLowerCase();
 }

 function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);                                                                              
 }

 //MAP

 const values = [1,2,3,4,5,6,7];
const cube = values.map(cubes);
console.log(cube);
 function cubes(element){
    return Math.pow(element, 3);
 }

 const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
 const studentsUpper = students.map(upperCase);
 console.log(studentsUpper);

 function upperCase(element){
    return element.toUpperCase();

 }

 const dates = ["2024-02-28","2025-03-09","2023-01-05"];
 const formatedDates = dates.map(formatDates);
 console.log(formatedDates);
  
 function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
 }

 //filter

 const ages = [16,17,18,24,28];
 const adults = ages.filter(isAdult);
 const childrens = ages.filter(isChild);
 console.log(adults);
 console.log(childrens);

 function isAdult(element){
    return element >=18;
 }

 function isChild(element){
    return element < 18;
 }

 //Reduce
 const prices = [5,10,25,20,25];

 const total = prices.reduce(sum);
 console.log(`$${total.toFixed(2)}`);

 function sum(accumulator, element){
    return accumulator + element;
 }

 //Function expression 
 const nums = [1,2,3,4,5,6,7,8];
 

 cubes = nums.map(function (element){
    return Math.pow(element,3);
 })

 console.log(cubes);

 //arrow functions

 const num = [1,2,3,4,5,6,7,8];

 const sq = numbers.map((element)=> Math.pow(element,2));
 console.log(sq);

const hyallo =() => console.log("Hello!");
hyallo();
