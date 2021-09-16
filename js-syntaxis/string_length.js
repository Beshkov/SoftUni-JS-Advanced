function solve(first, second, third){
    let totalLength = first.length + second.length + third.length;
    let avarageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(avarageLength);
}

solve('chocolate', 'ice cream', 'cake')