function solve(){

    const text = document.getElementById('text').value;
    const naming = document.getElementById('naming-convention').value;
    const resultContainer = document.getElementById('result');

    const splited = text.split(' ')


    let resultString = ""
    if (naming == "Pascal Case"){
        for (let i = 0; i < splited.length; i++){
            resultString += splited[i][0].toUpperCase() + 
            splited[i].slice(1, splited[i].length).toLowerCase();
        }
    } else if (naming == "Camel Case"){
        resultString += splited[0][0].toLowerCase() + 
            splited[0].slice(1, splited[0].length).toLowerCase();

        for (let i = 1; i < splited.length; i++){
            resultString += splited[i][0].toUpperCase() + 
            splited[i].slice(1, splited[i].length).toLowerCase();
            
        }
    } else {
        resultString = 'Error!';
    }
    resultContainer.textContent  = resultString;
}