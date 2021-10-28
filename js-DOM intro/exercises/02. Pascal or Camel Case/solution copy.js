// function solve() {
//   let input = document.getElementById('text').value;
//   let typeOfCase = document.getElementById('naming-convention').value;
//   let result = ''
//   let counter = 0
//   input = input.split(' ')
//   for (let word of input) {
//     word = word.toLowerCase();
//     if (typeOfCase === "Camel Case") {
//       if (counter === 0) {
//         result += word
//         counter++;
//       }
//       else {
//         result += word[0].toUpperCase()
//         result += word.slice(1)
//       }
//     }
//     else if (typeOfCase === "Pascal Case") {
//       result += word[0].toUpperCase()
//       result += word.slice(1)
//     }
//     else {
//       result = "Error!"
//     }
//   }

//   let res = document.getElementById('result');
//   res.textContent = result
// }



// mine funcion work on in the DOM but not in judge... 

function solve() {
  let input = document.querySelector('#text').value;
  const naming = document.getElementById('naming-convention').value
  let result = document.querySelector('#result');
  let concatinatedString = ''
  input.toLowerCase();
  input = input.split(' ')

  if (naming == "Pascal Case"){   
    concatinatedString += textConverter(input, 0);
  } else if (naming == "Camel Case"){
    concatinatedString += input[0]
    concatinatedString += textConverter(input, 1);
  } else {
    concatinatedString = 'Error!'
  }

  function textConverter(arr, index) {
    let res = []
    for (let i = index; i < arr.length; i++) {
      if (index <= 1) {
        res.push(firstLeterUpperCase(arr[i]))
      } else {
        res.push(arr[i])
      }
    }
    return res.join('');
  }
  function firstLeterUpperCase(word) {
    let result = word[0].toUpperCase()
    result += word.slice(1).toLowerCase()
    return result
  }

  result.innerText = concatinatedString

}
