// let data = {
//     name: "charan",
//     age: 19,
//     obj: {
//         college: "ABCD",
//         place: "Bangalore",
//         pin: 460049
//     }
// };
// let{name : n, age, obj : {college, place, pin}} = data;

    // (or)

let{name : n, age, obj : {college, place, pin}} = {
    name: "charan",
    age: 19,
    obj: {
        college: "ABCD",
        place: "Bangalore",
        pin: 460049
    }
}
console.log(n);
console.log(age);
console.log(college);
console.log(place);
console.log(pin);