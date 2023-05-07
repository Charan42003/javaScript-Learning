// Object
let object = {
    firstName: "charan",
    lastName: "raj",
    age: 19
};
object.firstName = "jathin";
console.log(object);
console.log(object.firstName);
console.log(object['lastName']);

// object, if prototype has to include space, cannot use dot notation, can only use array notation
let obj = {
    'first name': "charan",
    'last name': "raj"
}
console.log(obj['first name']);

// adding properties into object
let data = {
    firstName: "charan",
    lastName: "raj",
    age: 19
};
data.result = "pass"
console.log(data);
console.log(data['result']);

//deleting properties from object
let data_del = {
    firstName: "charan",
    lastName: "raj",
    age: 19
};
delete data_del.age;
console.log(data_del);

//check if property exists or no
let info = {
    firstName: "charan",
    lastName: "raj",
    age: 19
};
console.log(info);
console.log('heigth' in info);
console.log('age' in info);

// for in loop
let bank = {
    name: "charan raj s",
    accountNO: 3090934,
    phoneNO: 983474839384
}

for(let key in bank) {
    console.log(key);
}
for(let key in bank) {
    console.log(`${key}: ${bank[key]}`);  // to access the value of the property inside loop we have to use array notation
}

// Action/ Method in object
// 1.
let person1 = {
    name: "charan",
    age: 19,
    sayHello: function() {
        console.log("1hello!");
    }
}
person1.sayHello();

// 2.
let person2 = {
    name: "charan",
    age:19
}
person2.sayHello = function() {
    console.log("2hello!");
}
person2.sayHello();

// 3.
let person3 = {
    name: "charan",
    age: 19
}
person3.sayHello = greet;
function greet() {
    console.log("3hello!");
}
person3.sayHello();

// 4.
let person4 = {
    name: "charan",
    age: 19,
    sayHello () {
        console.log("4hello!!");
    }
}
person4.sayHello();

// this keyword

let car = {
    brand: "tata",
    hello() {
        console.log(`${this.brand} is famous`)
    }
}
car.hello();

// Math objects 
console.log(Math.PI); //gives pi value
console.log(Math.E);
console.log(Math.ceil(2.44)); // gives the top value
console.log(Math.floor(1.55)); // gives the bottom value
console.log(Math.round(4.6));  // rounds the value
console.log(Math.trunc(4.8));   // removes the point
console.log(Math.pow(10, 2));   // gives the power
console.log(Math.sqrt(100));    // gives the squareroot
console.log(Math.min(5, 100, 89, 66, -9, 0));   // gives the minimum value
console.log(Math.max(5, 100, 89, 66, -9, 0));   // gives the maximum value

// **generating a random number **
    console.log(Math.random())
    let rand = Math.floor(Math.random() * 101);
    console.log(rand);
// **generating a random number in range**
    let range = Math.floor(Math.random() * (25 - 15)) + 15; //Math.floor(Math.random() * (max-num - min-num)) + min-num
    console.log(range);

// Date Object 
let currentDate = new Date();
let date = new Date(2018, 0, 13, 10, 33, 56, 7);
let stringDate = new Date("October 12, 2022 11:12:33");
//  year, month(0-11), day, hour, minute, second, milisecond
console.log(date);
console.log(stringDate);
console.log(currentDate);

// getFunction
console.log("Date : " + currentDate.getDate());
console.log("Day : " + currentDate.getDay());
console.log("Month : " + currentDate.getMonth());
console.log("Hours : " + currentDate.getHours());
console.log("Minutes : " + currentDate.getMinutes());
console.log("Seconds : " + currentDate.getSeconds());
console.log("Time(in seconds) : " + currentDate.getTime());

// setFunction 
let setDate = new Date();
console.log("currentDate: " + setDate);
setDate.setFullYear(2005);
setDate.setHours(2);
setDate.setMinutes(2);
setDate.setMonth(3);
console.log("ChangesInDate: " + setDate);

// CREATING NEW OBJECT USING 'new' keyword
let newObject = new Object();
newObject.Name = "Charan";
newObject.College = "EPCHE";
console.log(newObject);

// getter
let getter = {
    name: "CHARAN",
    lastName: "raj",
    get getname() {
        return this.name.toLowerCase();
    }
};
console.log(getter.getname);
console.log(getter);

// setter
let setter = {
    name: "charan",
    lastName: "raj",
    set setName(nam) {
        this.name = nam.toUpperCase();
        return "hello"
    }
}
setter.setName = "Kiran";
console.log(setter.name);
console.log(setter);

// OBJECT CONSTRUCTOR FUNCTION 
function Object(first, last, name, college, course) {
    this.firstName = first;
    this.lastName = last;
    this.name = name;
    this.college = college;
    this.course = course;
}
let student1 = new Object("charan", "raj", "charan raj", "EPCHE", "BCA");
let student2 = new Object("RAJ", "CHARAN", "RAJ CHARAN", "EPCHE", "BCA");
console.log(student1);
console.log(student2);

// Object prototype
function Pro(first, last) {
    this.firstName = first;
    this.lastName = last;
}
Pro.prototype.nationality = "indian";
Pro.prototype.name = function() {
    return `${this.firstName} ${this.lastName}`;
}
let pro1 = new Pro("Charan", "Raj");
let pro2 = new Pro("kiran", "Kumar");


console.log(pro1);
console.log(pro1.nationality);
console.log(pro2);
console.log(pro2.name());

// Nested Objects 
let userData = {
    user_id: 10934,
    log_date: "12/03/2022",
    personal_info: {
        name: "charan",
        age: 19,
        email: "abc@email.com",
        address: {
            street: "abc",
            city: "bnglor",
            state: "karna",
            country: "india"
        }
    }
}
console.log(userData)
console.log(userData.personal_info);
console.log(userData.personal_info.address);
console.log(userData.personal_info.address.street)