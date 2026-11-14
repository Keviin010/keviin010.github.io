// Abre y cierra el menú lateral en pantallas pequeñas
function iniciarMenu() {
    var boton = document.querySelector(".layout__menu-toggle");
    var menu = document.querySelector(".layout__aside");
    var iconoBarras = document.querySelector(".layout__menu-toggle .fa-bars");
    var iconoCerrar = document.querySelector(".layout__menu-toggle .fa-xmark");

    function mostrarMenu(abierto) {
        if (abierto) {
            menu.classList.add("layout__aside--visible");
        } else {
            menu.classList.remove("layout__aside--visible");
        }
        iconoBarras.style.opacity = abierto ? 0 : 1;
        iconoCerrar.style.opacity = abierto ? 1 : 0;
    }

    boton.addEventListener("click", function () {
        var estaAbierto = menu.classList.contains("layout__aside--visible");
        mostrarMenu(!estaAbierto);
    });

    // Si la ventana se hace grande, el menú se cierra
    window.addEventListener("resize", function () {
        if (document.body.clientWidth <= 1060) {
            mostrarMenu(false);
        }
    });
}
document.addEventListener("DOMContentLoaded", iniciarMenu);
