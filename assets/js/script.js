boton = document.querySelector(".boton");

boton.addEventListener("click", verPassword);

function verPassword() {
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;
    let select3 = document.getElementById("select3").value;

    let mensaje = document.querySelector(".mensaje");

    let franja = document.querySelector(".container__mensaje");

    if (select1 == 9 && select2 == 1 && select3 == 1) {
        mensaje.innerHTML = "Password 1 Correcto";
        franja.style.backgroundColor = "#00ff00";

    } else if (select1 == 7 && select2 == 1 && select3 == 4) {
        mensaje.innerHTML = "Password 2 Correcto";
        franja.style.backgroundColor = "#00ff00";

    } else {
        mensaje.innerHTML = "Password Incorrecto";
        franja.style.backgroundColor = "#ff0000"
    }
}