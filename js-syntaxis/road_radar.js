function roadRadar(speed, aread){
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let speedZone = 0;
    let differenceInSpeed = 0;
    let speedOverTheLimit;


    switch(aread){
        case "motorway":
            speedZone = motorway;
            break;
        case "interstate":
            speedZone = interstate;
            break;
        case "city":
            speedZone = city;
            break;
        case "residential":
            speedZone = residential;
            break;
    }


    if(speed > speedZone){
        differenceInSpeed = speed - speedZone;
    }

    if (differenceInSpeed> 0){
        if (differenceInSpeed <= 20){
            speedOverTheLimit = "speeding"
        } else if (differenceInSpeed <= 40) {
            speedOverTheLimit = "excessive speeding";
        } else {
            speedOverTheLimit = "reckless driving"
        }
        console.log(`The speed is ${differenceInSpeed} km/h faster than the allowed speed of ${speedZone} - ${speedOverTheLimit}`);
    } else{
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
    }

}

roadRadar(200, 'motorway')
