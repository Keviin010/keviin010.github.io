// Formulario de contacto.
// Si hay clave de Web3Forms, el mensaje llega directo al correo.
// Si no la hay (o falla el envío), se abre la app de correo con el mensaje listo.

// Clave pública de Web3Forms (se consigue gratis en web3forms.com con tu correo)
var CLAVE_WEB3FORMS = "7290395f-7bf1-4fbb-8496-b6c0b53c7b86";
var CORREO_RESPALDO = "kevd.r19@gmail.com";

function iniciarFormulario() {
    var formulario = document.querySelector("#contact-form");
    var aviso = document.querySelector("#form-status");
    if (!formulario) return;

    function mostrarAviso(texto) {
        aviso.textContent = texto;
        aviso.classList.add("form__status--visible");
    }

    // Abre la app de correo del visitante con el mensaje escrito
    function abrirCorreo(datos) {
        var cuerpo = "Nombre: " + datos.nombre + "\nCorreo: " + datos.correo + "\n\n" + datos.mensaje;
        window.location.href = "mailto:" + CORREO_RESPALDO + "?subject=" + encodeURIComponent(datos.asunto) + "&body=" + encodeURIComponent(cuerpo);
        mostrarAviso("Se abrió tu app de correo con el mensaje listo. Solo falta enviarlo.");
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var datos = {
            nombre: document.querySelector("#form-name").value,
            correo: document.querySelector("#form-email").value,
            asunto: document.querySelector("#form-subject").value || "Contacto desde tu portafolio",
            mensaje: document.querySelector("#form-message").value
        };

        // Sin clave configurada: usamos el correo del visitante
        if (CLAVE_WEB3FORMS === "PEGA_AQUI_TU_CLAVE") {
            abrirCorreo(datos);
            return;
        }

        mostrarAviso("Enviando...");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                access_key: CLAVE_WEB3FORMS,
                from_name: "Portafolio",
                name: datos.nombre,
                email: datos.correo,
                subject: datos.asunto,
                message: datos.mensaje
            })
        })
            .then(function (respuesta) { return respuesta.json(); })
            .then(function (resultado) {
                if (resultado.success) {
                    mostrarAviso("¡Gracias! Tu mensaje llegó. Te responderé pronto.");
                    formulario.reset();
                } else {
                    abrirCorreo(datos);
                }
            })
            .catch(function () {
                abrirCorreo(datos);
            });
    });
}
document.addEventListener("DOMContentLoaded", iniciarFormulario);
