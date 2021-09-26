function gcd(num1, numb2){
    let bigger
    let biggestDivisor

    if (num1 < numb2) {
        bigger = numb2
    } else {
        bigger = num1
    }

    for (let i = 0; i < bigger ; i++){
        if ( num1 % i ===0 && numb2 % i === 0 ){
            biggestDivisor = i
        }
    }

    console.log(biggestDivisor)
}

gcd(15, 5)
gcd(2154, 458)


// function gcd(a, b) {
//     while (b != 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
 
//     return a;
// }
 