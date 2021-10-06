function solve(matrix) {
    let equals = 0;


    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (i==0){
                if (j==0){
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    } 
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    }  
                } else if (j==matrix[i].length-1){
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    } 
                } else {
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    } 
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    } 
                }
            } else if (i==matrix.length-1){
                if (j==0){
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    }
                } else if (j==matrix[i].length-1) {
                } else {
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    }
                }
            } else {
                if (j==0){
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    } 
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    } 
                } else if (j==matrix[i].length-1) {
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    } 
                } else {
                    if (matrix[i][j]===matrix[i][j+1]){
                        equals += 1;
                    } 
                    if (matrix[i][j]===matrix[i+1][j]){
                        equals += 1;
                    } 
                }              
            }
        }
    }    
    return equals
}


console.log(solve(
[['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))
console.log(solve(
[['test', 'yes', 'yo', 'ho'],
 ['well', 'done', 'yo', '6'],
 ['not', 'done', 'yet', '5']]
))