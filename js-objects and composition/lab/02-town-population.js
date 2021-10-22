function treasury(array) {
    const json = {};
    array.forEach(element => {
        let [town, budget] = element.split(' <-> ');
        // there should be validation that is checking if the city already exist in the JSON and add the value
        if(!json[town]){
            json[town] = 0;
        } 
        json[town] += Number(budget);
        
    });

    for (const [town, pop] of Object.entries(json)){
        console.log(`${town} : ${pop}`)
    }
    
    // const stoyanIsGay = Object.entries(json);
    // console.log(stoyanIsGay)
    
}

// treasury(
//     ['Sofia <-> 1200000',
//         'Montana <-> 20000',
//         'Montana <-> 20000',
//         'New York <-> 10000000',
//         'Washington <-> 2345000',
//         'Las Vegas <-> 1000000']
// )

treasury(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
)

