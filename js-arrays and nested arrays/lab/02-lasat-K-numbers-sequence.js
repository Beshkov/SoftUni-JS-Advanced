function solve(nNumber, kNumber) {
    const myList = [1];
    for (let i = 0; i < nNumber-1; i++){
        myList.push(myList.slice(-kNumber).reduce((a,b)=> a+b,0))
    }
    return(myList)
}

console.log(solve(6, 3))