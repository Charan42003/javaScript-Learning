// FETCH API 

// let p = fetch(url)
// p.then((value) => {
//     return value.json();
// })
// .then((response)=> {
//     console.log(response);
// })

// POST REQUEST 
let options = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 100,
    })
}
fetch('url', options) 
    .then((response) => response.json())
    .then((json) => console.log(json))