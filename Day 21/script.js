//Objects in JavaScript

const person1 = {
    firstName : "SpongeBob",
    lastName : "SquarePants",
    age : 30,
    isEmployed : true,
    sayHello : function(){
        console.log("Hi!,I am SpongeBob")
    },
    sayBye : function(){
        console.log("GoodBye !")
        },  
}

console.log(person1.firstName);
person1.sayHello();
person1.sayBye();


//this

const person2 = {
    name : "SpongeBob",
    favFood : "hamburgers",
    sayHello : function(){
        console.log(`Hi! I am ${this.name}`)
    },
    eat : function(){ console.log(`${this.name} is eating ${this.favFood}`)},
}

// person2.sayHello();
person2.eat();

//Constructor

function Car(make, model, year, color){
    this.make = make;
    this.model= model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    };
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chervolet", "Camaro", 2025, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();   

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive(); 


//Class in JavaScript

class product{
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${(this.price).toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return (salesTax*this.price)+ this.price;
    }
}

const salesTax = 0.05;

const product1 = new product("Pant",23);
const product2 = new product("Shirt",15);
product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) : $${total.toFixed(2)}`)


//STATIC KEYWORD

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2*this.PI*radius;
    }

    static getArea(radius){
        return (2*this.PI)*(Math.pow(radius,2));
    }
}
// const MathUtil1 = new MathUtil();
// console.log(MathUtil1.PI);
console.log(MathUtil.PI);
console.log(MathUtil.getArea(5));
console.log(MathUtil.getCircumference(5));
console.log(MathUtil.getDiameter(5));

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++;
    }

    sayHello(){
        console.log(`Hello! My username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} members active`)
    }
}

const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();


//Inheritance 

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log("Rabbits can run");
    }

}

class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log("Fishes can swim");
    }

}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.swim();