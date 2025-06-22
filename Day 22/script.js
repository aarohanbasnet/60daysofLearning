//SUPER KEYWORD

class Animal{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} move at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

const rabbit = new Rabbit ("Bunny",1, 25);
rabbit.run();

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed =swimSpeed;

    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const fish = new Fish("Fish",2,5);
fish.swim();

//Getter and Setter

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error("Height  must be a positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}
    
const rectangle = new Rectangle(-10000, "pizza");

rectangle.width = 1000;
rectangle.height = 240;
console.log(rectangle.width);
console.log(rectangle.height);


//Getter and setters Eg. 2 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof(newFirstName == "string") && newFirstName.length > 0){
            this._firstname = newFirstName;
        }else{
            console.error("First name must be a non-empty string")
        }
    }

    set lastName(newLastName){
        if(typeof(newLastName == "string") && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non-empty string")
        }
    }

    set age(newAge){
        if(typeof(newAge == "number") && newAge >= 0){
            this._age = newAge;
        }else{
            console.error("Age must be non negative integer ")
        }
    }

    get firstName(){
        return this._firstname;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstname + " "+ this._lastName;
    }

}

const person = new Person("Spongebob", "Squarepants", "22");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);