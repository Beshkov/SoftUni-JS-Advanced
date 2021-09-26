function exer4(arr){
    const result = [];

    arr.forEach((el) => {
        const [name, level, items] = el.split(" / ");
        result.push({
            name,
            level: Number(level),
            items: items ? items.split(", ") : [ ]
        })
    })

    return JSON.stringify(result);
    
}

console.log(exer4(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))