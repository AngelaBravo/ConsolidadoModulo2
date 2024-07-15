const contactos = [];
const capturadatos = document.getElementById("formulario");
const respuesta = document.getElementById("teXto");
capturadatos.addEventListener("submit", ProcesarFormulario);
function ProcesarFormulario(e) {
    e.preventDefault();
    const Valornombre = e.target.nombre.value;
    const Valortelefono = e.target.telefono.value;
    const Valormail = e.target.mail.value;
    const contacto = {
        nombre: Valornombre,
        telefono: Valortelefono,
        mail: Valormail,
    }
    contactos.push(contacto);
    e.target.reset();

    respuesta.textContent = "Gracias por contactarse conmigo, me contactaré con usted a la brevedad";
    respuesta.style.color= "blue"
    respuesta.style.fontSize= "1.5rem"
}



const CambiaTexto = document.getElementById("teXto");
CambiaTexto.addEventListener



