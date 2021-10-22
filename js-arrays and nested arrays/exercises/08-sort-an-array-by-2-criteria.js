function sortByTwoCriteria(arr) {
    return arr.sort((a, b) =>{
        if(a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join('\n')

}

console.log(sortByTwoCriteria(
    ['alpha',
    'beta',
    'gamma']
))
console.log(sortByTwoCriteria(
    ['test', 
    'Deny', 
    'omen', 
    'Default']
))
console.log(sortByTwoCriteria(
    ['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
))