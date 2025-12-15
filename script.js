let formulario = document.getElementById("formulario-tareas");
let input = document.getElementById("input-tarea");
let lista = document.getElementById("lista-tareas");
let botonBorrar = document.getElementById("boton-borrar");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let li = document.createElement("li");
    li.textContent = input.value;

    lista.appendChild(li);
    input.value = "";
});

botonBorrar.addEventListener("click", function () {
    if (lista.lastChild) {
        lista.lastChild.remove();
    }
});
