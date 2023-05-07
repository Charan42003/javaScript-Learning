let array = [23, 23, 5, 2, 5, 44, 99]
let aa = array.filter((val) => {
    return val > 10;
})

console.log(array)
console.log(aa)


let data = [
    {
        name: "rahul",
        position: "developer"
    },
    {
        name: "kiran",
        position: "manager"
    },
    {
        name: "mike",
        position: "marketing"
    },
    {
        name: "milli",
        position: "marketing"
    },
    {
        name: "vaibav",
        position: "developer"
    },
    {
        name: "borb",
        position: "manager"
    },
    {
        name: "george",
        position: "developer"
    },
];

let sortData = data.filter((ele)=> {
    return ele.position == "developer"
})
console.log(sortData)