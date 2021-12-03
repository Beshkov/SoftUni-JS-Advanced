function lockedProfile() {
    // add toggle event listener to all profile radio buttons

    // find associated profile details
    // if it's visible -> hide it and display lable 'show more'
    // otherwise -> show it and display lable 'hide it'

    Array.from(document.querySelectorAll('.profile button')).forEach(button => button.addEventListener('click', onToggle));

    function onToggle(ev) {
        const profile = ev.target.parentElement;
        const profileIsUnlocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        
        if ( profileIsUnlocked ) {

            if ( ev.target.textContent == 'Show more'){
                infoDiv = profile.querySelector('div')

                ev.target.textContent = 'Hide it';
                infoDiv.style.display = 'block';
            } else {
                infoDiv.style.display = '';
                ev.target.textContent = 'Show more';
                
            }
        }
    }
}
    // function onToggle(ev) {
    //     const arg = Array.from(ev.target.parentElement.querySelectorAll('div')).find(d => d.id.includes('HiddenFields'));
        
    //     const unlocked = Array.from(ev.target.parentElement.querySelectorAll('input')).find(i => i.value.includes('unlock'));
    //     if (unlocked.checked == true) {
    //         arg.style.display = 'inline';
    //         let button = ev.target.parentElement.querySelector('button');
    //         button.textContetn = 'Hide it';
    //         button.addEventListener('click', onClick);
    //         function onClick(e) {
    //             arg.style.display = 'none';
    //             e.target.textContetn = 'Show more';
    //         }
    //     };

    // }
