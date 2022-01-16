function getFibonator(){
    let n1 = 0 ;
    let n2 = 1;


    function getNumber() {
        let nextNumber = n1+n2;

        n1 = n2;
        n2 = nextNumber;

        return nextNumber
    }

    return getNumber
}


let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());


//the correct code bellow 
function getFibonator() {
    let n1=0;
    let n2=1;
 
 
    function getNumber() {
        let nextNumber = n1+n2;
        n2=n1;
        n1 = nextNumber;
        return nextNumber;
    }
 
    return getNumber;
}