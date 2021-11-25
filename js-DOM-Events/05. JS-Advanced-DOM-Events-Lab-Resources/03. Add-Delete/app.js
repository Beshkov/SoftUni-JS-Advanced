function addItem() {
    let textBoxValue = document.getElementById("newItemText").value;
    // console.log(textBox);

    if (textBoxValue.length === 0) return;

    let newLi = document.createElement("li");
    let deleteLink = document.createElement("a");


    let linkText = document.createTextNode('[Delete]');
    deleteLink.appendChild(linkText);
    deleteLink.href= "#";

    deleteLink.addEventListener("click", deleteItem);
    // console.log(deleteLink);

    newLi.appendChild(document.createTextNode(textBoxValue));
    newLi.appendChild(deleteLink)
    document.getElementById("items").appendChild(newLi);
    // this find the Ul element with id "items" and append the new Li element

    function deleteItem(){
        newLi.remove();
    }


    document.getElementById("newItemText").value = '';
    //this reset the value of the input field.
}