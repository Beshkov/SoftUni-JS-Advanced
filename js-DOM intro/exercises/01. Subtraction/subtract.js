function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value);
    let num2 = Number(document.getElementById('secondNumber').value);
    let result = document.getElementById('result')
    result.innerText =`${ num1 - num2}`

    console.log(result.value);
}