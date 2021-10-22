function createAssemblyLine() {
    const library = {


        hasClima(viacle) {
            viacle.temp = 21;
            viacle.tempSettings = 21;
            viacle.adjustTemp = () =>{
                if (viacle.temp < viacle.tempSettings){
                    viacle.temp += 1
                }else if (viacle.temp > viacle.tempSettings){
                    viacle.temp -= 1
                };
            };
        },

        hasAudio(viacle){
            viacle.currentTrack = {
                name: null,
                artist: null
            },
            viacle.nowPlaying = () => {
                if (viacle.currentTrack !== null)
                console.log(`Now playing '${viacle.currentTrack.name}' by '${viacle.currentTrack.artist}'`)
            }
        },

        hasParktronic(viacle){
            viacle.checkDistance = (distance) =>{
                if (0.25<=distance && distance <0.5){
                    console.log('Beep!')
                } else if (0.1 <= distance && distance < 0.25){
                    console.log('Beep! Beep!');
                }else if(distance<0.1){
                    console.log('Beep! Beep! Beep!');
                } else {
                    console.log('')
                }
            }
        }
    }
    return library
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);