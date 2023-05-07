
// let book = ["math", "physics", "bio", "computer"];
let book = new Array("math", "physics", "bio", "computer");
console.log(book[2]);
console.log(book);
const ook = ["math", true, 1, "%%"];
console.log(ook);

// Operations On Array 
let newArray = ["value", true, 788];
console.log(newArray);

// Array Length
console.log("Array Length: " + newArray.length);

// Add Element into Array in the last index
newArray.push("pushed");
console.log(newArray);

// Add Element into Array in the first index
newArray.unshift("unshifted");
console.log(newArray);

// Remove the Elements in Array from last
newArray.pop();
console.log(newArray);
newArray.pop();
console.log(newArray);

// Remove the Elements in Array from first
newArray.shift();
console.log(newArray);

// Remove the Elements in Array from middle
newArray = ["value", true, 788, "menu", 454];
console.log(newArray);
newArray.splice(2,2);
console.log(newArray);

// Empty an Array
// newArray = [];
newArray.length = 0;
console.log(newArray);

// Find the Position of a particular element in an Array
newArray = ["value", true, 788, "menu", 454];
let leng = newArray.indexOf(true);
console.log("indexOf true is " + leng);

// Check if Array or not 
let checkName = ["varun", "john", "rohn", "wing"];
let checkLeng = 4;
console.log(Array.isArray(checkName));
console.log(Array.isArray(checkLeng));

// Split a string or sentance into array elements
let txt = "this is a string braken into array";
let ary = txt.split(' ');
console.log(ary);

// Join array elements into a string 
let arry = ["this", "is", "an", "array", "joined", "like", "a", "string"];
let text = arry.join(' '); 
console.log(text);

// Joining two or more arrays  
let array1 = ["one", "two", "three"];
let array2 = [1, 2, 3];
let new_array = array1.concat(array2);
console.log(array1);
console.log(array2);
console.log(new_array);

// Multi-Dimensional Array
let multi_array = [
    ["wings of fire", "300/-"],
    ["MCA", "400/-"],
    ["Soul of Happiness", "900/-"]
 ];
console.log(multi_array);
console.log(multi_array[2][0]);

// loop through an Array
let loop_array = ["hello", "world", "!!", "welcome"];
let length = loop_array.length;
for( let i = 0; i < length; i++) {
        console.log(`loop_array[${i}]: ${loop_array[i]} \n`);
}

// forEach(func) 
loop_array = ["hello", "world", "!!", "welcome"];
loop_array.forEach(func);
function func(value) {
        console.log(value);
}