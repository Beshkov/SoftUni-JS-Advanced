function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let result = 0;
    
    for (let i=1; i<rows.length; i++){
        let cols = rows[i].children;
        let cost = cols[cols.length-1].textContent;
        result += Number(cost);
    }
    document.getElementById('sum').textContent = result
}