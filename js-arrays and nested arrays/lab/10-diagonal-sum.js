function solve(matrix) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for (let i = 0; i < matrix.length; i++){
        leftDiagonal += matrix[i][i];
        rightDiagonal += matrix[i][matrix[i].length-i-1]
    }

    return [leftDiagonal, rightDiagonal].join(' ')
}

console.log(solve(
    [[20, 40],
    [10, 60]]))
console.log(solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]))