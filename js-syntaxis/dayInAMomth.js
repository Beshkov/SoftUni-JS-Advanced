function solve(month, year){
    let thatDate = new Date(year, month, 0);
    day = thatDate.getDate()

    console.log(day)
}

solve(1, 2012)