function solve() {

    const [name, hall, ticketPrice] = document.querySelectorAll("# container input");
    const addMovieButton = document.querySelector("#container button");
    addMovieButton.addEventListener("click", addMovie);


    function addMovie(e) {
        if (name.value != "" && hall.value != "" && ticketPrice.value != "" && isNaN(Number(ticketPrice.value))){
            const movie = document.createElement("li");
            movie.innerHTML = `<span>${name}</span><strong>${hall}</strong>
            <div>
                <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                <input placeholder="Tickets Sold">
                <button>Archive</button>
            </div>`
            movieSection.appendChild(movie);
            
        }
    }

}