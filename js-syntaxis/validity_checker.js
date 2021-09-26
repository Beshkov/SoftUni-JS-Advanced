function solve(...arg) {
    const x1 = Number(arg[0]);
    const y1 = Number(arg[1]);
    const x2 = Number(arg[2]);
    const y2 = Number(arg[3]);


    function distance(x1, y1, x2, y2){
        const distanceX = x1 - x2;
        const distanceY = y1 - y2;
        return Math.sqrt(distanceX**2 + distanceY**2);
    }
    if (Number.isInteger(distance(x1, y1, 0, 0))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

solve(3, 0, 0, 4)
solve(2, 1, 1, 1)
