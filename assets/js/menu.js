function iniciarMenu() {
    var boton = document.querySelector(".layout__menu-toggle");
    var menu = document.querySelector(".layout__aside");
    var pantallaGrande = window.matchMedia("(min-width: 1061px)");

    function estaAbierto() {
        return menu.classList.contains("layout__aside--visible");
    }

    function mostrarMenu(abierto) {
        menu.classList.toggle("layout__aside--visible", abierto);
        document.body.classList.toggle("menu-abierto", abierto);
        boton.setAttribute("aria-expanded", abierto ? "true" : "false");
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    }

    boton.addEventListener("click", function () {
        var abrir = !estaAbierto();
        mostrarMenu(abrir);
        if (abrir) {
            menu.querySelector(".menu__link").focus({ preventScroll: true });
        }
    });

    document.addEventListener("click", function (evento) {
        var clicFuera = !menu.contains(evento.target) && !boton.contains(evento.target);
        if (estaAbierto() && clicFuera) {
            mostrarMenu(false);
        }
    });

    menu.addEventListener("click", function (evento) {
        if (evento.target.closest("a")) {
            mostrarMenu(false);
        }
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && estaAbierto()) {
            mostrarMenu(false);
            boton.focus();
        }
    });

    function alCambiarTamano(evento) {
        if (evento.matches) {
            mostrarMenu(false);
        }
    }

    if (pantallaGrande.addEventListener) {
        pantallaGrande.addEventListener("change", alCambiarTamano);
    } else {
        pantallaGrande.addListener(alCambiarTamano);
    }
}
document.addEventListener("DOMContentLoaded", iniciarMenu);
