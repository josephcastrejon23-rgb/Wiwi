// ========================================
// 💗 CONFIGURACIÓN
// ========================================

const CONFIG = {

    // ✏️ CAMBIA ESTOS NOMBRES
    nombreNovia: "Mi amor",
    miNombre: "Tu amor",

    // ✏️ CAMBIA ESTA FRASE SI QUIERES
    fraseFinal:
        "No importa cuántas cartitas escriba, nunca serán suficientes para explicar todo lo que siento por ti. Gracias por existir y por compartir tu vida conmigo. Te amo. ♡",

    // 💌 TUS CARTITAS
    cartas: [

        {
            titulo: "La primera vez",
            texto:
                "Desde que llegaste a mi vida hay momentos que simplemente se sienten diferentes. Me encanta recordar cómo empezó todo y pensar en todo lo bonito que todavía nos queda por vivir."
        },

        {
            titulo: "Tu sonrisa",
            texto:
                "Tu sonrisa tiene algo que no sé explicar. Puede cambiar completamente mi día y hacer que cualquier problema parezca un poquito más pequeño."
        },

        {
            titulo: "Lo que admiro de ti",
            texto:
                "Admiro tu forma de ser, tu manera de querer y cada pequeño detalle que te hace ser tú. Nunca cambies esa esencia tan bonita que tienes."
        },

        {
            titulo: "Nuestros momentos",
            texto:
                "Guardo muchísimo cariño por cada momento que hemos compartido. Incluso las cosas más simples se vuelven especiales cuando estoy contigo."
        },

        {
            titulo: "Gracias",
            texto:
                "Gracias por estar conmigo, por escucharme, por hacerme reír y por regalarme tantos momentos que voy a guardar siempre en mi corazón."
        },

        {
            titulo: "Mi lugar favorito",
            texto:
                "No importa dónde estemos. Si estás tú conmigo, siento que estoy exactamente donde quiero estar."
        },

        {
            titulo: "Lo que quiero",
            texto:
                "Quiero seguir creando recuerdos contigo, conocer nuevos lugares, reírnos de cosas tontas y acompañarnos en cada etapa que venga."
        },

        {
            titulo: "Te amo",
            texto:
                "Y si tuviera que resumir todo esto en una sola frase, sería muy sencilla: te amo muchísimo y me siento muy afortunado de tenerte en mi vida."
        }

    ]
};


// ========================================
// VARIABLES
// ========================================

let descubiertas = [];
let cartaActual = 0;


// ========================================
// INICIAR
// ========================================

function comenzar() {

    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("juego").classList.add("activa");

    crearCartas();

}


// ========================================
// CREAR LAS CARTAS
// ========================================

function crearCartas() {

    const contenedor = document.getElementById("cartas");

    contenedor.innerHTML = "";

    CONFIG.cartas.forEach((carta, index) => {

        const elemento = document.createElement("div");

        elemento.className = "carta";

        elemento.innerHTML = `
            <div>
                <div class="carta-icono">💌</div>
                <div class="carta-numero">${String(index + 1).padStart(2, "0")}</div>
            </div>
        `;

        elemento.onclick = () => abrirCarta(index, elemento);

        contenedor.appendChild(elemento);

    });

}


// ========================================
// ABRIR CARTA
// ========================================

function abrirCarta(index, elemento) {

    cartaActual = index;

    const carta = CONFIG.cartas[index];

    document.getElementById("numeroCarta").textContent =
        `CARTITA ${String(index + 1).padStart(2, "0")}`;

    document.getElementById("tituloCarta").textContent =
        carta.titulo;

    document.getElementById("textoCarta").textContent =
        carta.texto;

    document.getElementById("nombreFirma").textContent =
        CONFIG.miNombre;

    document.getElementById("modal").classList.add("mostrar");

    if (!descubiertas.includes(index)) {

        descubiertas.push(index);

        elemento.classList.add("carta-descubierta");

        actualizarProgreso();

    }

}


// ========================================
// CERRAR CARTA
// ========================================

function cerrarCarta() {

    document.getElementById("modal").classList.remove("mostrar");

}


// ========================================
// ACTUALIZAR PROGRESO
// ========================================

function actualizarProgreso() {

    document.getElementById("contador").textContent =
        descubiertas.length;

    if (descubiertas.length === CONFIG.cartas.length) {

        setTimeout(() => {

            document.getElementById("juego").classList.remove("activa");
            document.getElementById("final").classList.add("activa");

            document.getElementById("fraseFinal").textContent =
                CONFIG.fraseFinal;

        }, 700);

    }

}


// ========================================
// REINICIAR
// ========================================

function reiniciar() {

    descubiertas = [];

    document.getElementById("final").classList.remove("activa");
    document.getElementById("juego").classList.add("activa");

    crearCartas();

    actualizarProgreso();

}


// ========================================
// VOLVER AL INICIO
// ========================================

function volverInicio() {

    descubiertas = [];

    document.getElementById("juego").classList.remove("activa");
    document.getElementById("inicio").classList.add("activa");

}


// ========================================
// SORPRESA FINAL
// ========================================

function sorpresa() {

    document.getElementById("sorpresa").classList.add("mostrar");

    crearLluvia();

}


// ========================================
// CERRAR SORPRESA
// ========================================

function cerrarSorpresa() {

    document.getElementById("sorpresa").classList.remove("mostrar");

}


// ========================================
// LLUVIA DE CORAZONES
// ========================================

function crearLluvia() {

    const contenedor =
        document.querySelector(".lluvia-corazones");

    contenedor.innerHTML = "";

    for (let i = 0; i < 30; i++) {

        const corazon = document.createElement("span");

        corazon.textContent = "♥";

        corazon.style.position = "fixed";
        corazon.style.left = Math.random() * 100 + "%";
        corazon.style.top = "-30px";
        corazon.style.fontSize =
            (Math.random() * 20 + 10) + "px";

        corazon.style.animation =
            `caer ${Math.random() * 3 + 2}s linear forwards`;

        corazon.style.animationDelay =
            Math.random() * 2 + "s";

        contenedor.appendChild(corazon);

    }

}


// ========================================
// ANIMACIÓN DE CORAZONES
// ========================================

const estilo = document.createElement("style");

estilo.textContent = `

@keyframes caer {

    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(estilo);


// ========================================
// PERSONALIZAR NOMBRE
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Página romántica cargada para:",
        CONFIG.nombreNovia
    );

});
