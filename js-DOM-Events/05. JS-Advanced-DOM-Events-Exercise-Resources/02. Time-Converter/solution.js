function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

 

    daysBtn.addEventListener('click', ()=> {
        let daysValue = Number(days.value);
        hours.value = daysValue * 24;
        minutes.value = daysValue * 24 * 60;
        seconds.value = daysValue * 24 * 60 * 60;
    });

    hoursBtn.addEventListener('click', () => {
        let hoursValue = Number(hours.value);
        days.value = hoursValue / 24;
        minutes.value = hoursValue * 60;
        seconds.value = hoursValue * 60 * 60; 
    });

    minutesBtn.addEventListener('click', () =>{
        let minutesValue = Number(minutes.value);
        days.value = minutesValue / (24 * 60);
        hours.value = minutesValue / 60 ; 
        seconds.value = minutesValue * 60;
    });

    secondsBtn.addEventListener('click', () => {
        let secondsValue = Number(seconds.value);
        days.value = secondsValue / (24 * 60 * 60);
        hours.value = secondsValue / (60 * 60);
        minutes.value = secondsValue / 60;
    });
}