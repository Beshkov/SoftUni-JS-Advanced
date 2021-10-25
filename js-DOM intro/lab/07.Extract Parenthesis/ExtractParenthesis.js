function extract(content) {
    let text = document.getElementById(content).textContent;
    let matcher = /\(([^)]+)\)/g;
    let result = [];
    
    let match = matcher.exec(text)
    while(match){
        // console.log(match);
        result.push(match[1]);
        match= matcher.exec(text);
    }
    
    return result.join('; ')
}