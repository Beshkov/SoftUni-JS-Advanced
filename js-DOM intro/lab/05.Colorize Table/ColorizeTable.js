function colorize() {
    let rows = document.querySelectorAll('table tr');
    // console.log(rows.length);
    let index = 0;
    for (let row of rows){
        index ++;
        if (index % 2 == 0){
            row.style.background = 'teal';
        }
    }
}