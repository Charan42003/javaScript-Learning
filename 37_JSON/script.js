//Parse JSON
let data = `
{
    "name": "charan",
    "age": 19,
    "stack": ["javascript", "c", "jquery", "scss/sass", "bootstrap"],
    "is_student": true,
    "passport_no": null,
    "address": {
        "city": "bangalore",
        "state": "karnataka",
        "country": "india",
        "pincode": 560049
    }
}
`;
// JSON.parse(data) |converts the value in data to javascript object
let dataObject = JSON.parse(data);
//accessing through dot notation
console.log(dataObject.stack)
console.log(dataObject.address.city)
//accessing through array method
console.log(dataObject["stack"][3])
console.log(dataObject["address"]["country"])
console.log(dataObject["address"])

console.warn("JSON stringify")
//JSON stringify

let profile = {
    name: "Charan",
    age: 19,
    stack: ["javascript", "c", "jquery", "scss/sass", "bootstrap"],
    experience: null,
    student: true,
    address: {
        city: "bangalore",
        country: "india",
        pincode: 560056,
        homeAdd: {
            street: "vramp col.",
            land_mark: "BBB Apartments"
        }
    }
};

let jsonProfile = JSON.stringify(profile);

console.log(profile);
console.log(jsonProfile);