function magicMatrices(params) {
    // console.log(params)
    const matrixRow = [];
    const matrixCol = [];
    let sumRow = 0;
    let sumCol = 0;
    params.forEach(element => {
        // console.log(element)
        matrixCol.push(params[0][0] + params[1][0] + params[2][0]);
        
        matrixRow.push(element.reduce((acc, red) => acc + red));      
    });
    sumRow = matrixRow.reduce((a,r)=>a+r);
    sumCol = matrixCol.reduce((a,r)=>a+r);

    return sumCol == sumRow
}

console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
))
console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
))