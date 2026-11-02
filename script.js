
const bienvenida = document.getElementById("bienvenida");
const sorpresa = document.getElementById("sorpresa");
const recuerdos = document.getElementById("recuerdos");

const clave = document.getElementById("clave");
const error = document.getElementById("error");

const botonDescubrir =
  document.getElementById("botonDescubrir");

const botonRecuerdos =
  document.getElementById("botonRecuerdos");

const botonNuevaClave =
  document.getElementById("botonNuevaClave");

const nuevaClave =
  document.getElementById("nuevaClave");

const mensajeNuevaClave =
  document.getElementById("mensajeNuevaClave");

// Primera clave de nuestra historia
const CLAVE_INICIAL = "ROSA";

// Recuperamos el progreso guardado en este navegador
let desbloqueado =
  localStorage.getItem("primerRecuerdo") === "true";

// Cambia de una pantalla a otra
function mostrarPantalla(pantalla) {
  bienvenida.classList.add("oculto");
  sorpresa.classList.add("oculto");
  recuerdos.classList.add("oculto");

  pantalla.classList.remove("oculto");
}

// Comprobamos la clave que escribe Adri
botonDescubrir.addEventListener("click", () => {
  const respuesta = clave.value.trim().toUpperCase();

  if (respuesta === CLAVE_INICIAL) {
    desbloqueado = true;

    localStorage.setItem("primerRecuerdo", "true");

    mostrarPantalla(sorpresa);
  } else {
    error.textContent =
      "Esa no es la palabra, amor. Intenta otra vez ❤️";
  }
});

// Abrir el álbum
botonRecuerdos.addEventListener("click", () => {
  mostrarPantalla(recuerdos);
});

// Por ahora, las siguientes pistas estarán pendientes
botonNuevaClave.addEventListener("click", () => {
  const respuesta = nuevaClave.value.trim();

  if (respuesta === "") {
    mensajeNuevaClave.textContent =
      "Primero escribe una clave, mi niña ❤️";
  } else {
    mensajeNuevaClave.textContent =
      "Esta pista todavía no tiene una respuesta. " +
      "Guarda tu descubrimiento. 🌹";
  }
});

// Si ya desbloqueó la primera pista,
// no tendrá que introducirla otra vez.
if (desbloqueado) {
  mostrarPantalla(recuerdos);
}


// ===== SÍMBOLO SECRETO =====

const botonSimbolo =
  document.getElementById("botonSimbolo");

const simboloOculto =
  document.getElementById("simboloOculto");

// Recuperar si Adri ya encontró la estrella
const estrellaDescubierta =
  localStorage.getItem("estrellaDescubierta") === "true";

if (estrellaDescubierta) {
  simboloOculto.classList.remove("oculto");
  botonSimbolo.textContent = "Estrella descubierta ✦";
}

// Mostrar el símbolo al tocar el botón
botonSimbolo.addEventListener("click", () => {

  simboloOculto.classList.remove("oculto");

  botonSimbolo.textContent = "Estrella descubierta ✦";

  localStorage.setItem("estrellaDescubierta", "true");

});


const volverSorpresa =
  document.getElementById("volverSorpresa");

volverSorpresa.addEventListener("click", () => {
  mostrarPantalla(sorpresa);
});
