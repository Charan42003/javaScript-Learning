let sum = (a, b) => {
    let s = a+b;
    return s;
}
console.log(sum(5, 6))

//for a single code that only returns 
let sub = (a, b) => a-b;
console.log(sub(9,4))

//for a single parameter
let mul = a => a*2;
console.log(mul(5));

//for no parameters
let randomDecimal = () => Math.random();
console.log(randomDecimal());

//arrow functions as ananomous
document.addEventListener('keypress', (e)=> {
    let a = e.key;
    console.log(`${a} is pressed`)
})