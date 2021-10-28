function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const text = document.getElementById("extra");
    
    button.textContent = button.textContent == "More" ? "Less" : "More";
    // set button.textContent to: (if button.textContent = "More" -> set to: "Less"; else set to: "More")

    text.style.display = text.style.display === "block" ? "none" : "block";
    // set text.style.display to "none" if text.style.display = "block" else, set it to: "block"
    
}