// Async function

// async function charan() {
//     let p1 = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('21 deg')
//         }, 3000)
//     })
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('27 deg')
//         }, 5000)
//     })
//     console.log("Fetching Delhi weather please wait......")
//     let delhiw = await p1; //waits till it gets the value of p1
//     console.log("Fetched Delhi weather")
//     console.log("Fetching Bangalore weather please wait.....")
//     let bangalore2 = await p2; //wait till it gets the value of p2
//     console.log("Fetched Bangalore weather")
//     return [delhiw, bangalore2]
// }
// console.log(charan())
// charan().then((value)=> {
//     let[a, b] = value;
//     console.log(value)
//     console.log(a)
//     console.log(b)
// })

//Error Handling Try Catch
// setTimeout(function() {
//     console.log("Started Hacking abc Account")
// }, 1000)

// try {
//     console.log(abc)
// }
// catch(error) {
//     console.log(error)
// }
    
// setTimeout(function() {
//     console.log("Fectching username and password ......")
// }, 2000)
// setTimeout(function() {
//     console.log("Wait for 1second 99% fectched.....")
// }, 3000)
// setTimeout(function() {
//     console.log("username and password fetched... Injecting the data to your device...")
// }, 4000)
// setTimeout(function() {
//     console.log("Hacked abc Account")
// }, 5000)

//worng approach 
// try {
//     setTimeout(() => {
//         console.log(Rahul)
//     }, 1000);
// }
// catch(error) {
//     console.log(error)
// }
//right approach
// setTimeout(()=> {
//     try{
//         console.log(rahul)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }, 1000)

//finally clause 
try{
    let a= 0;
    console.log(program)
    console.log("program ran successfully")
}
catch(err) {
    console.log('this is an error')
}
finally {
    console.log("I am a good boy" );
}