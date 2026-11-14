// Carga el mapa de Google al abrir la página de contacto
function cargarMapa() {
    var contenedor = document.querySelector("#load-iframe-map");
    if (!contenedor) return;
    contenedor.innerHTML = '<iframe class="contact__iframe" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198846.67476262552!2d-75.70810932031717!3d6.24433820648106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44449f708f8f77%3A0x8e8e8a898b8d8e8f!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2ses!4v1684435838701!5m2!1ses!2ses"></iframe>';
}
document.addEventListener("DOMContentLoaded", cargarMapa);
