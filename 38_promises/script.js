// let promise = new Promise(function(resolve, reject) {
//     console.log("Promise ....")
// })

// console.log("hello world")
// setTimeout(function() {
//     console.log("hello 2 sec delay");
// }, 2000);

// console.log("hello 3")

// let p1 = new Promise(function(resolve, reject) {
//     console.log("promise is pending...")
//     setTimeout(function() {
//         console.log("I am a promise and I am resolved");
//         resolve(true);
//     }, 5000);
// })
// let p2 = new Promise(function(resolve, reject) {
//     console.log("promise is pending...")
//     setTimeout(function() {
//         console.log("I am a promise and I am rejected");
//         reject(new Error("I called this error"));
//     }, 5000);
// })

// console.log(p1, p2)


//.then() and .catch()
// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(function() {
//         reject(new Error("Charan you got an error"))
//         // resolve("Successful....")
//     }, 5000)
// });
// p1.then((value)=> {
//     console.log(value)
// })
// .catch((err)=> {
//     console.error(err)
// });

// //promise chaining
// let prom = new Promise((res, rej)=> {
//     setTimeout(()=> {
//         res("Resolved after 2 seconds")
//     }, 2000)
// })
// prom.then((res)=> {
//     console.log(res)
//     let prom1 = new Promise((res, rej)=> {
//         res("this is prom 2");
//     })
//     return prom1
// }).then((res) => {
//     console.log(res)
//     console.log("we are done")
//     return 2
// }).then((res) => {
//     console.log(res)
// })

// const loadscript = (src) => {
//     return new Promise((resolve, reject)=> {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = src
//     document.body.appendChild(script)
//     script.onload = ()=> {
//         resolve("successfull added script file with src: " + src)
//     }
//     script.onerror = ()=> {
//         reject(src + " failed to load charan")
//     }
// })
// }
// // let p = loadscript('https://google.com') //error path
// let p = loadscript("temp.js")  //noerror path
// p.then((res)=> {
//     console.log(res)
//     return loadscript('ttt.js')
// })
// .then((res)=> {
//     console.log(res)
//     console.log("Second script is ready")
//     return loadscript('ttj.js')
// })
// .then((res)=> {
//     console.log(res)
//     console.log("Third script is ready")
// })
// .catch((error)=> {
//     console.log(error)
// })

//Attaching Multiple Handlers to a promise

// let p1 = new Promise((resolve, reject) => {
//     console.log("Hey this promise is not resolved")
//     setTimeout(()=> {
//         resolve(1)
//     }, 5000)
// });
// p1.then(()=> {
//     console.log("congratulations this promise is successful")
// })
// p1.then(()=> {
//     setTimeout(()=> {
//         console.log("Hurrey this is multi handler")
//     }, 4000);
// })

//PROMISE API

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value1");
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("value2");
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value3");
    }, 3000);
})

//1. Promise.all([promises])
    // let all_promises = Promise.all([p1, p2, p3]);

    // all_promises.then((value)=> {
    //     console.log(value);
    // })
    
// 2. Promise.allSettled([promises])
    // let all_promises = Promise.allSettled([p1, p2, p3]);

    // all_promises.then((value)=> {
    //     console.log(value);
    // })

// 3. Promise.race([promises])
    // let all_promises = Promise.race([p1, p2, p3]);

    // all_promises.then((value)=> {
    //     console.log(value);
    // })

// 4. Promise.any([promises])
    // let all_promises = Promise.any([p1, p2, p3]);

    // all_promises.then((value)=> {
    //     console.log(value);
    //})
// 5. Promise.resolve(value)
    // let all_promises = Promise.resolve(6);

    // all_promises.then((value)=> {
    //     console.log(value);
    // })
// 6. Promise.reject(value)
    // let all_promises = Promise.reject(new Error("error Charan"));

    // all_promises.then((value)=> {
    //     console.log(value);
    // })