function solve(arg1, arg2){

    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let result = 0;

    for (i = num1; i < num2+1; i++){
        result += i;
    }

    console.log(result)
}

solve('1', '5')
solve('-8', '20')