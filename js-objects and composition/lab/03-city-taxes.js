function cityTaxes(name, population, treasury) {
    return {
        name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes(){this.treasury += this.population * this.taxRate},
        applyGrowth(percent) {this.population += this.population *(percent/100)},
        applyRecession(percent){this.treasury -= this.treasury *(percent/100)}
        // this refers to the object itself (python equiv of self) aka this object. 
    };
}

// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
console.log(city);