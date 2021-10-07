function solve(arr) {
    let orderNumber = 1;
    arr.sort((a,b) => a.localeCompare(b)).forEach((el)=> {
        console.log(`${orderNumber}.${el}`);
        orderNumber++;
    })
}




console.log(solve(
    ["John", "Bob", "Christina", "Ema"]
))