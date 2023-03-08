let text_btn = document.getElementById("text_btn");
let text = document.getElementById("text");

text_btn.addEventListener("click", cambiarEstilo);

function cambiarEstilo() {
    text.classList.toggle("mostrar");
    if (text.classList.contains("mostrar")) {
        text_btn.innerHTML = "Mostrar menos";
    } else {
        text_btn.innerHTML = "Mostrar mas";
    }
}