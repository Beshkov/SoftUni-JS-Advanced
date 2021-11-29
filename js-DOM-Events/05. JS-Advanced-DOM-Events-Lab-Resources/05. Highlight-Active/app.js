function focused() {
    // select all input div-s 
    //change the class to focused 
    // Array.from(document.getElementsByTagName('input'))
    //     .forEach(el =>{
    //         el.addEventListener('focus', ({target: { parentNode } }) => parentNode.classList.add('focused'));
    //         el.addEventListener('blur', ({target: { parentNode } }) => parentNode.classList.remove('focused'));
    //         el.addEventListener('focus', ({target: { parentNode } }) => console.log(parentNode));
    //         console.log(el);
            
    //     })

    const fields = Array.from(document.getElementsByTagName('input'));

    for ( let field of fields ) {
        field.addEventListener('focus', onFocus)
        field.addEventListener('blur', onBlur)
    }

    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focused')
    }

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');
    }
};