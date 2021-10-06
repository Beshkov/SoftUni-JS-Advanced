function solve(matrix){
    let biggest = Number.MIN_VALUE
    for (let i = 0; i < matrix.length; i++){
        for (let k = 0; k < matrix[i].length; k ++){
            if (matrix[i][k] > biggest){
                biggest = matrix[i][k];
            }
        }
    }
    return biggest
}


function solve2(matrix) {
    let biggestNum = [];
    for (let row of matrix){
        biggestNum.push(row.sort((a,b) => a-b).slice(-1))
    }
    return Math.max(biggestNum.sort((a,b) => a-b).slice(-1))
}

console.log(solve2(
    [[20, 50, 10],
    [8, 33, 145]]))
console.log(solve2(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]))