// function sayHello() {
//     return "Hello, ";
// }

// function greeting(helloMessage, name) {
//     return helloMessage() + name;
// }

// console.log(greeting(sayHello, "JavaScript!"));


function sayHello() {
    return function () {
        console.log('Hello! ');
    }
}
const myFunc = sayHello();
myFunc();


const write = function () {
    return "Hello, world!";
}

console.log(write());

let array1 = [2,4,6,8,10,12]

let found = array1.find(isFound);

function isFound(element) {
    return element > 10;
}

console.log(found);
