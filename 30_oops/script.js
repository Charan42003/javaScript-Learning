//Object Oriented Programming before ES6

//creating an object 
let person = {
    first_name: "charan",
    last_name: "raj"
}
console.log(person.first_name)
console.log(person.last_name)

//Constructor function
function objectt(firstName, lastName, age, pincode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.pincode = pincode;
}

let objectt1 = new objectt("charan", "raj", 19, 560049);
let objectt2 = new objectt("kiran", "kumar", 18, 560039);
console.log(objectt1)
console.log(objectt1.age)
console.log(objectt2)
console.log(objectt2.lastName)

//prototype and Inheritance
console.warn("prototype")
let obj = {}; //prototype is added by default
console.log(obj)

//check if the property exists or no
// object_name.hasOwnProperty("property_name");
//example
function info(n, a, p) {
    this.name= n;
    this.age = a;
    this.p = p;
}
let data = new info("charan", 19, "raj")
console.log(data)
console.log(data.hasOwnProperty("age")); //returns true or false

function profile(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
// to move the fullName method into the object prototype since
// the method is repeating when ever the object is created
// to solve it

profile.prototype.fullName = function() {
    console.log(this.firstName + " " + this.lastName);
} 
let p1 = new profile("charan", "raj", 19);
let p2 = new profile("kiran", "kumar", 18);

console.log(p1)
console.log(p2)
//Inheritance
console.warn("Inheritance")

//creature function
function creature(name, n) {
    this.species = name;
    this.lifespan = n;
}
creature.prototype.breath = function () {
    console.log("breating.......")
}
let creature1 = new creature("horse", 100);
let creature2 = new creature("eagle", 70);


//human function
function human(name, age) {
    this.name = name;
    this.age = age;
}
human.prototype.think = function () {
    console.log("thinking.......")
}

let human1 = new human("charan", 19);
let human2 = new human("kiran", 19);

// connecting human object with creature object 
human.prototype.__proto__ = Object.create(creature.prototype);

console.log(creature1)
console.log(creature2)
console.log(human1)
console.log(human2)
console.log(human1.think)
console.log(human2.think)
console.log(human1.breath)
console.log(human2.breath)

console.warn("class");
//class

class hello {
    constructor() {
        //code
    }
}
let hh = new hello;
// this will create an object and the constructor function is automatically called
// when ever a new object is created
console.log(hh)
//example

class student {
    constructor(name, age, roll) {
        this.Name = name;
        this.Age = age;
        this.Roll = roll;
    }
    greet() {
        console.log(`Hello ${this.Name}, Welcome to JS`)
    }
    // static function this can be called only by class name
    // this remains with class there wont be any connection with object
    static give(l) {
        console.log(`you are ${l.Age}`);
    }
    static sprop = "welcome"
}
let student1 = new student("charan", 19, 8080000);
console.log(student1)
student1.greet();
//to call statice function class name should be used !(object name)
student.give(student1);
console.log(student.sprop)

//Inheritance of class
console.warn("Inheritance of class");
//super() should be added to inherit

class emp {
    constructor(name, id){
        this.Name = name;
        this.Id = id;
    }
    static msg() {
        console.log("welcome")
    }
}

// extends keyword is used to inherit emp to manager

class manager extends emp{
    constructor(Name, Id, res){
        super(Name, Id); // this will call the emp constructor (important);
        this.Promotion = res
    }
}
class admin extends manager {

}
let mng1 = new admin("Charan", "333d3", "Elegible");
console.log(mng1)

// PUBLIC AND PRIVATE properties

class publicClass {
    constructor(n){
        this.Name = n;
    }
    getName() {
        console.log(this.Name);
    }
}
let publicClass1 = new publicClass("charan")
console.log(publicClass1)

//to create private properties # shoud be given before the property name
//and should be declared and assigned a blank string before the constructor() function;

class privateClass {
    #Name = "";
    constructor(n) {
        this.#Name = n;
    }
    getName() {
        console.log(this.#Name);
    }
}
let privateClass1 = new privateClass("Ravi");
console.log(privateClass1);


console.warn("Mixin")
//Mixin
// syntax: Object.assign(class_name.prototype, Object_name);
let objct = {
    sayhi() {
        console.log("Hello objct ...")
    },
    sayBye() {
        console.log("bye objct ....")
    }
}

class user {
    constructor () {
        this.name = "charan"
    }
}

class admin1 extends user {

}

//to mix the two objects
Object.assign(admin1.prototype, objct);

let user1 = new admin1();

console.log(user1)