let a = 4;
let b = 5;
console.log("a = ", a, "b = ", b);

// if statement 

if(a>b) {
    console.log("Yes a is greater than b");
}
else {
    console.log("a is less than b");
}

// else if statement 

let age = 33;
console.log( age );
if(age < 18)
{
    console.log("You are still a baby you cant vote");
}
else if(age > 18)
{
    console.log("You can vote ");
}
else if(age > 70)
{
    console.log("You are old, cant vote")
}

// ternary operator

let flag = 0;
(flag == 0)? console.log("ternary is working"): console.log("ternay is still working");

//Null is collesing operator

let user;
let user2 = "charan"
console.log(user ?? "Guest using");
console.log(user2 ?? "Guest using");

//Switch statement

let input = 2;
switch(input)
{
    case 1:
        console.log("one (switch)");
        break;
    case 2:
        console.log("two (switch)");
        break;
    case 3:
        console.log("three (switch)");
        break;
    default:
        console.log("this is default (switch)");
}