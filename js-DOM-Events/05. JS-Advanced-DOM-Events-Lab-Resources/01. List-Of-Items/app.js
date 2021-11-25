function addItem() {
    let textBoxValue = document.getElementById("newItemText").value;
    // console.log(textBox);

    if (textBoxValue !==''){
        let newLi = document.createElement("li");
        newLi.appendChild(document.createTextNode(textBoxValue));
        
        document.getElementById("items").appendChild(newLi);
        // this find the Ul element with id "items" and append the new Li element
    }
    
    document.getElementById("newItemText").value = '';
    //this reset the value of the input field.
}