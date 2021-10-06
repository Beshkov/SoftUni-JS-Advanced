function solve(arr) {
    // let result = [];
    // arr.sort((a,b)=>a-b);
    // if(arr.length % 2 == 0){
    //     // console.log(arr.length)
    //     result = arr.slice(arr.length/2, arr.length)
    // } else {
    //     result = arr.slice(arr.length/2,(arr.length))
    // }

    // return result;

    return arr.sort((a,b)=>a-b).slice(-Math.ceil(arr.length/2))
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))