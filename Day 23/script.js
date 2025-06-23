
//Nested objects
 person= {
    name : "Spongebob",
    age : 30,
    isStudent : false,
    hobbies : ["Karate","Cooking","jellyfishing"],

    address : {
        street : "124 Conch St.",
        city : "Bikini Bottom",
        country : "Int. Water",

    }
 }

 for(const property in person.address){
    console.log(person.address[property]);
 }

 console.log(person.name);
 console.log(person.address.city);


 //eg.2

 class Person{
    constructor(name, age, ...address1){
        this.name = name;
        this.age = age;
        this.address1 = new Address(...address1);
    }
 }

 class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;

    }
 }

 const person1 = new Person("SpongeBob","30","124 Conch st.",
                            "Bikini Bottom",
                            "Int. Waters");

 const person2 = new Person("Patrick","35","128 Conch st.",
                            "Bikini Bottom",
                            "Int. Waters");

 console.log(person1.address1.country);
console.log(person2.name);
console.log(person2.address1.country);


//Arrays of Objects

const fruits = [{name : "apple",color:"red",calories : 95},
                {name : "orange",color: "orange", calories : 45},
                {name : "banana", color : "yellow", calories :105},
                {name : "coconut", color : "white", calories : 159},
                {name : "pineapple", color : "yellow",calories : 37}];

 console.log(fruits[0].name);
 console.log(fruits[3].calories); 
              
fruits.push({name : "grapes", color: "purple", calories : 37});
console.log(fruits);
fruits.pop();

//---------forEach--------------

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));

//----------map()--------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitColors);

//-----filter()----------
const yellowFruits = fruits.filter(fruit => fruit.color == "yellow");
console.log(yellowFruits[0].name);

//-----reduce()------
const maxCal = fruits.reduce( (max, fruit) => fruit.calories > max.calories ?
                                            fruit : max);
console.log(maxCal);

//Sort 

fruits.sort();
console.log(fruits);

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
numbers.sort((a,b)=>b - a); //reverse order
console.log(numbers);

const peoples = [{name : "Spongebob", age : 30, gpa : 3.0},
                 {name : "Patrick", age: 35, gpa : 1.5 },
                 {name : "Squidward", age : 51, gpa: 2.5}]

peoples.sort((a,b)=> a.age - b.age); //for gpa a.gpa-b.gpa;
console.log(peoples);

//for strings 
peoples.sort((a, b) => a.name.localeCompare(b.name));


//Dates object 

let date = new Date();
console.log(date);
 
date = new Date(2024,0,1,2,3,4,5);
console.log(date)

date = new Date ("2024-01-02T12:00:00Z");
console.log(date);

const year = date.getFullYear();
console.log(year);

date.setFullYear(2030);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
date1 > date2 ? console.log("HAPPY NEW YEAR") : console.log("NEW YEARS EVE!");