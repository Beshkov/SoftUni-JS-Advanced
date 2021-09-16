function solve(num){
    let temp = 5;
    let result = ''
    if (num){
        temp = num;
    }

    // console.log(temp)

    for (i = 0; i < temp; i++){
        for(j = 0; j < temp; j++){
            result += '* '
        }
        result += '\n'
    }
    console.log(result)
}

solve(1)
solve()
solve(2)
solve(5)
