function attachGradientEvents() {
    let gradient = document.getElementById("gradient")
    gradient.addEventListener("mousemove", gradientMove); // mouseMOVE not mouseOVER
    gradient.addEventListener("mouseout", gradientOut);

    const output = document.getElementById("result");

    function gradientMove(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.floor(power * 100);
        output.textContent = `${power}%`;
    }

    function gradientOut(){
        output.textContent = "";
    }
}