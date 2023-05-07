function sayHello(n) {
    console.log("hello "+n)
}
 
function process(b, func) {
    func(b);
}

process("charan", sayHello)