//и да допълня после се прави slice(-2) което взима само 14 от 014,
// а ако е било '0' + 5 = 05 slice ще ти върне 05 с водещата 0. както се иска

// към 9 задача  -> Здравейте, тази задача е доста лесна. (str)=> console.log(str.match(/[a-zA-Z0-9]+/g).map(x=> x.toUpperCase()).join(', '))


function solve(steps, footprint, speed){
    const distanceInMeters = steps * footprint
    const distanceInKilometers = distanceInMeters / 1000
    const restTime = Math.floor(distanceInMeters / 500) * 60 
    const speedPerKilomethersInSeconds = 60*60/speed


    const totalTime = (distanceInKilometers * speedPerKilomethersInSeconds) + restTime
    const dateTime = new Date(0,0,0,0,0, totalTime)

    const sec = dateTime.getSeconds()
    const minutes = dateTime.getMinutes()
    const hours = dateTime.getHours()

    console.log(sec)

    console.log(`${hours.toString().length < 2 ? '0'+ hours:hours}:${minutes.toString().length < 2 ? '0'+ minutes: minutes}:${sec.toString() < 2 ? '0' + sec:sec}`)
 
}

solve(2564,
    0.70,
    5.5)


// the out put is off by one sec: the code that work is :

function time_walk(...args){
    let hours;
    let minutes;
    let seconds;
    let steps = args[0];
    let step_length = args[1];
    let speed = args[2];
    let devisor = (1/60).toFixed(6); 
    let meters = steps * step_length;
    let kilometers = meters/1000;
    let rest_time_minutes = Math.floor(meters/500);
    let minutes_row = ((kilometers/speed)/devisor)+rest_time_minutes;
    if (minutes_row > 60){
        hours = Math.floor(minutes_row/60);
        minutes = Math.floor(minutes_row - hours*60);
        seconds = Math.ceil((minutes_row - hours*60 - minutes)/devisor);
    } else {
        hours = 0;
        minutes = Math.floor(minutes_row);
        seconds = Math.ceil((minutes_row-minutes)/devisor);
    }
    if (String(hours).length == 1){
        hours = '0'+ String(hours)
    } else {
        hours = String(hours)
    }
    if (String(minutes).length == 1){
        minutes = '0'+ String(minutes)
    } else {
        minutes = String(minutes)
    }
    if (String(seconds).length == 1){
        seconds = '0'+ String(seconds)
    } else {
        seconds = String(seconds)
    }
    console.log(hours+':'+minutes+':'+seconds);
}



