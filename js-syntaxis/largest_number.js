function solve(arr1, arr2, arr3){
    let largestNumber = Math.max(arr1, arr2,arr3);

    console.log('The largest number is', largestNumber+'.');
}

solve(-3, -5, -22.5)

// doing it according to the project condition in order to practice if else : 

function solve2(arg1, arg2, arg3){
    let result;
    if (arg1 > arg2 && arg1 > arg3){
        result = arg1;
    } else if (arg2 > arg1 && arg2 > arg3){
        result = arg2
    } else if (arg3 > arg1 && arg3 > arg2){
        result = arg3
    }

    console.log(`The largest number is ${result}.`)
}

solve2(5, -3, 16)