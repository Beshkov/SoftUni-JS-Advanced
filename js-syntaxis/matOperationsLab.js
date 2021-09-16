function solve(num1, num2, operator){

    let result = num1
    switch(operator){
        case "+":
            result += num2;
            break;
        case "-":
            result -= num2;
            break;
        case "*":
            result *= num2;
            break;
        case "/":
            result /= num2;
            break;
        case "%":
            result %= num2;
            break;
        case "**":
            result **=num2;
            break

    }

    console.log(result)
}

solve(5, 6, '+')
solve(2, 2, '**')
solve(3, 5.5, '*')
