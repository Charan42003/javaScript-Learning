// functions
function func() {
    console.log("hello world!, this is a function");
}
func();

// functions with argument/ parameter 
function table(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i} \n`);
    }
}
table(3);

function sum(a, b, c) {
    console.log("sum = " + (a + b + c));
}
sum(4, 4, 12);

// arguments property in functions
function argu() {
    // console.log(arguments.length+"*");
    // console.log(arguments[0])
    if(arguments.length === 0) {
        console.log("no arguments passed");
    }
    else {
        console.log(arguments.length + " arguments passed");
    }
}
argu();
argu(2);
argu("hello", 5);
argu(2, 4, 5, true);


// return in function 
function multi(a, b) {
    return (a*b);
}
console.log(multi(3, 10));

function compare(a, b) {
    if(a > b) {
        return `${a} is greater`;
    }
    else if( a < b) {
        return `${b} is greater`;
    }
    else if( a == b) {
        return `a and b is equal`;
    }
}
console.log(compare( 30, 40));

// global and local variable 
let a = 30;
function adding() {
    let b = 20;
    console.log(a + b);
}
adding();

//Ananomous function
let function_variable = function(){
    console.log("this is a function that is stored in a variabel")
}
function_variable();
setTimeout(function_variable, 3000);

setTimeout(function(){
    alert("ananomous function alert");
}, 5000);

// Immediately invoked function
(function() {
    console.log("this console function is immediately invoked")
})();

// Arrow function
sub = (a, b) => {
    console.log(a - b)
}
sub(19, 16);