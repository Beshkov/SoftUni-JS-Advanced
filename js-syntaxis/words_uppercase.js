/**
 *@param {string} someString
 */


function solve(someString){
    let result = someString.toUpperCase().match(/\w+/g).join(', ');

    console.log(result)
}

solve('Hi, how are you?')
solve('heLLo')