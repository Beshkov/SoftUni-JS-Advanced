function solve() {
  // const textArea = document.getElementsByTagName('textarea')[0]
  // let textAreaValue = textArea.value.split('.');
  // let output = document.getElementById('output')
  // let outputValue = ''
  // for (let i = 0; i < textAreaValue.length; i+=3){
  //   outputValue += `<p>${textAreaValue[i]+textAreaValue[i+1]+textAreaValue[i+2]}</p>`
  // }
  // output.innerHTML = outputValue

  const textArea = document.getElementById("input");

  let text = textArea.value;
  let resultDiv = document.getElementById('output');

  let sentance = text.split('.')
  .filter(x => x !== "") // x.lenth > 1 works the same 
  .map(x => x + '.');
  console.log(text.split('.'));
  let maxParagraphs = Math.ceil(sentance.length/3);

  for (let i = 0; i < maxParagraphs; i++){
    resultDiv.innerHTML += `<p>${sentance.splice(0, 3).join('')}</p>`
  }
  
  console.log(resultDiv.innerText)
  // there is a bug it return a new line \n and append a dot to it.
}