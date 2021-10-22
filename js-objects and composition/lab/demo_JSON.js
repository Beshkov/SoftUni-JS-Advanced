let obj = { name: "Jhon", age: 30, city: "New York"};
let myJSON = JSON.stringify(obj);

console.log(myJSON);

let arr = ["Jhon", "Peter", "Sally", "Jane"];
let myJSON2 = JSON.stringify(arr, null,2);
// null is given because stringify expect a function to act as a replacer function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
console.log(myJSON2);