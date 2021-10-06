function solve(arr, step){
    const result = [];
    for(let i = 0; i < arr.length; i+=step){
        result.push(arr[i])
    }
    console.log(result)
}

// solve(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2)


// 5

function solve4(arr){

    let biggest = Number.MIN_SAFE_INTEGER;
    let result = 


    // const result = arr.filter((el) => {
    //     if (el > biggest){
    //         biggest = el;
    //         return true;
    //     }
    //     return false
    // })


    arr.reduce((accumulated, current) =>{
        if (current >= biggest){
            biggest = current;
            accumulated.push(current)
        }
    }, result)
    return result
}


// solve4([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24])


// 6

function solve5(arr) {
    const result = arr.sort((a, b) => a.localeCompare(b));
    // console.log(result)
    let orderNumber = 1;
   arr.forEach((el) => {
       console.log(`${orderNumber}.${el}`);
       orderNumber++;
   });
}

solve5(["John", "Bob", "Christina", "Ema"])


// 7

function solve7(arr) {
    return arr.sort((a,b) => a-b)
}

// console.log(solve7([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

