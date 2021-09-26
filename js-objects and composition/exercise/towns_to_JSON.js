function ex7(arr){
    const result = [];

    const splitted = arr[0].split("|");
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitute = splitted[3].trim();
    // const [town, latitude, longitute] = arr[0].split("|");
    for (let i = 1; i < arr.length; i++){
        const obj = {};
        splitedEntry = arr[i].split("|");
        obj[town] = splitedEntry[1].trim(); 
        obj[latitude] = Number(Number(splitedEntry[2].trim()).toFixed(2));
        obj[longitute] = Number(Number(splitedEntry[3].trim()).toFixed(2));
        result.push(obj)
    }
    
    return JSON.stringify(result)
}

console.log(ex7(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']  
))