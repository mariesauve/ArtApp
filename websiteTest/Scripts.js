const myBox = document.getElementById("myBox");

function changeColor(event) {
    /*console.log(event);*/
    event.target.style.backgroundColor = "purple"
    event.target.textContent = "welcome! ";
}

myBox.addEventListener("click", changeColor);