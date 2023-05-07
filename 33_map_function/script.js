let array = [2, 3, 4, 5, 6]

let newArray = array.map(function(val) {
    return val * 3;
});
console.log(newArray)

// or 

let nArray = array.map((val)=> val*5)
console.log(nArray)