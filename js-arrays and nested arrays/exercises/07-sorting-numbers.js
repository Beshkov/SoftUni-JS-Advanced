function sortingNumbers(arr) {
    const result = [];
    const arrLength = arr.length
    arr.sort((a,b)=> a-b);
    for (let i=0; i < arrLength; i+=2){
        result.push(arr.shift());
        result.push(arr.pop())
    }
    return result
}

console.log(sortingNumbers(
    [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))