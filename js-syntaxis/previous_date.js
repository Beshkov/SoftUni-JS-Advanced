function perviousDate(year, month, day) {
    const thatDate = new Date(year, month-1, day);

    thatDate.setDate(thatDate.getDate()-1)
    const yr = thatDate.getFullYear();
    const mnt = thatDate.getMonth();
    const dy = thatDate.getDate()

    console.log(`${yr}-${mnt+1}-${dy}`)

}

perviousDate(2016, 10, 1)