// function solve(numb, ...param) {
//     let arr = param;
//     let result = Number(numb);

//     for (let i=0; i < arr.length; i++){
//         switch(arr[i]){
//             case "chop":
//                 result /= 2;
//                 break;
//             case "dice":
//                 result = Math.sqrt(result);
//                 break;
//             case "spice":
//                 result += 1;
//                 break;
//             case "bake":
//                 result *= 3;
//                 break;
//             case "fillet":
//                 result *= 0.8
//                 break
//         }

//         console.log(result)
//     }
// }

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

function cookingByNumber(number, ...params) {
    let arr = params;
    let result = Number(number);
    const commands = {
        'chop': (numb) => numb /= 2,
        'dice': (numb) => Math.sqrt(numb),
        'spice': (numb) => numb += 1,
        'bake': (numb) => numb *= 3,
        'fillet': (numb) => numb *= 0.8
    }
    for (let i=0; i < arr.length; i++){       
        result= commands[arr[i]](result)
        console.log(result)
    }
    
}

cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')