function solve(fruit, weight, pricePerKilogram){
    const fruitKilogramns = weight/1000;
    const fruitPrice = fruitKilogramns * pricePerKilogram;
    console.log(`I need $${fruitPrice.toFixed(2)} to buy ${fruitKilogramns.toFixed(2)} kilograms ${fruit}.
    `)
}

solve('orange', 2500, 1.80)