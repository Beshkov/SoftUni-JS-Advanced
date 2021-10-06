function solve(arr){
    let a = Number(arr.shift())
    let z = Number(arr.pop())
    let result = a + z

    return result
}

solve(['20', '30', '40'])
solve(['5', '10'])