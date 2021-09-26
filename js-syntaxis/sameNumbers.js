function sameNumber(numb) {
    let numberAsString = numb.toString();
    let toReturn = true;
    let toRetunrValue = 0
    for(let i =0; i < numberAsString.length; i++){
        for(let y = 0; y < numberAsString.length; y++){
            if (numberAsString[i] !== numberAsString[y]){
                toReturn = false;
            }
            
        }
        toRetunrValue += parseInt(numberAsString[i])
    }
    console.log(toReturn)
    console.log(toRetunrValue)

}

sameNumber(2222222)

// the salution above is lacing. the exercise as if all the numbers are the same. 
//The problem with that sollution is that if the 1st and the last number and the same it should not give "true" however in my solution it will.

// the demo solution

function extractNumbers(intNum) {
    const strNum = intNum.toString();
    let result = parseInt(strNum[0]);
    let isSame = true;
 
    for (let i = 1; i < strNum.length; i++) {
        result += parseInt(strNum[i]);
 
        if (strNum[i] != strNum[i-1]) {
            isSame = false;
        }
    }
 
    console.log(isSame);
    console.log(result);
}
 