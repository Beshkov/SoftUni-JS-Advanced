function solution(n) {
    let number = n;

    return function addNumber(n) {
        return number + n; 
    }
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));