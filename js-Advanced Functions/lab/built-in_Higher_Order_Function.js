Array.prototype.map
Array.prototype.filter
Array.prototype.reduce

users = [ { name: 'Tim', age: 25 },
          { name: 'Sam', age: 30 },
          { name: 'Bill', age: 20 } ];

getName = (user) => user.name;
usernames = users.map(getName);
console.log(usernames); // [ 'Tim', 'Sam', 'Bill' ]


// Pure Functions

// impure function:
let number = 1;
const increment = () => number += 1;
increment();
console.log(number); // 2 

// pure function :
const increment2 = n => n + 1;
console.log(increment2(2));


// Referential Transperancy: 

function add(a, b) { return a + b };
function mult(a, b) { return a * b };

let x = add(2, mult(3, 4)); // mult can be replaced with 12
console.log(x); // 12
