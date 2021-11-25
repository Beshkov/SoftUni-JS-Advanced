function deleteByEmail() {
     // get value from input field with id = "text"
     // delete a roll in the table if email match the value from input field
     // other wise "rise" error ? more like display error
     // append error or deleted email to div with id= "result"


    let email = document.querySelector("input").value;
    // let email = document.getElementsByName("email")[0].value;

    let table = Array.from(document.querySelectorAll("tbody tr"));
    // let selectColumn = document.querySelectorAll("#customers tr td:nth-child(2)"); 
    
    let message = "Not found.";
    table.forEach(el => {
        if (el.querySelectorAll("td")[1].textContent == email) {
            message = "Deleted";
            el.parentNode.removeChild(el);
            
        }
    })

    // for ( let td of selecColumn){
    //     let row = td.parentNode;
    //     row.parentNode.removeChild(row);
    //     document.getElementById('result').textContent = "Deleted.";
    //     return
    // }
    // document.getElementById("result").textContent = "Not found."; 

    document.getElementById("result").textContent = message;
}