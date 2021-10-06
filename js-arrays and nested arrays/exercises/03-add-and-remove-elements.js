function addAndRemoveEl(params) {
    const result = [];
    for (let i = 0; i < params.length; i++ ){
        if(params[i]=="add"){
            result.push(i+1);
        } else {
            result.pop()
        }
        
        
    }
    // if (result.length < 1){
    //     console.log('Empty')
    // } else{
    //     console.log(result.join('\n'))
    // }
    return result.length != 0 ? result.join('\n') : "Empty" //ternary operator
    
}


console.log(addAndRemoveEl(
    ['add',
        'add',
        'add',
        'add']
))
console.log(addAndRemoveEl(
    ['add',
        'add',
        'remove',
        'add',
        'add']
))
console.log(addAndRemoveEl(
    ['remove',
        'remove',
        'remove']
))