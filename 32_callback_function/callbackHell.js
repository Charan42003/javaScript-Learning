//callback function

let a = 5,
    b = 6

let hello = (e) => {
    console.log("Hello !! your answer is: " + e)
}

function sum(a, b, func) {
    let res = a + b;
    func(res);
}

sum(a, b, hello);

//example to show callback error handling

function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function() {
        console.log("loaded script with src " + src);
        callback(null, src);
        console.log("loadeddd............")
    }
    script.onerror = function() {
        callback(new Error("link not found"), src);
        console.log("bad luck found an error...............................")
    }
    document.body.appendChild(script);
}

function callbackErrorHandling(error, src) {
    if(error) {
        console.error(" ");
        console.log("found an error")
        console.error(" ");
    }else{
        console.log("Hello " + src);
    }
}

loadScript("script.js", callbackErrorHandling); // no error

loadScript('https://www.goo gle.com', callbackErrorHandling); // with error

//pyramid of Doom
 /*
    eg:
        loadscript() {
            script()....
                script()....
                    script()....
                        script().....

        }
 
 */

