function solve(arr){
    let totalSum = 0;
    let inverstSum = 0;
    let concatString = ''


    // for (let i = 0; i < arr.length; i++ ){
        

    // }


    totalSum = arr.reduce((a,b) => a + b, 0)

    concatString = arr.join('');

    inverstSum = arr.reduce((a, b) => a+1/b, 0)
    
    console.log(totalSum)
    console.log(inverstSum)
    console.log(concatString)
}

solve([1,2,3])
solve([2,4,8,16])