// ----- GOOGLE TRADUCTOR -----
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_traductor')
}

// ----- MODALES (FOTO MAXIMIZADA) -----
// --- Header ---
// Insertar foto dentro del modal
let foto_header = document.getElementById("foto_header");
let foto_grande_header = document.getElementById("foto_grande_header");
let modal_header = document.getElementById("modal_header");
foto_header.addEventListener("click", maximizar_header);

function maximizar_header() {
  modal_header.style.display = "block";
  foto_grande_header.src = this.src;
}

// Botón de cierre y cerrado por click afuera de la foto
let x = document.getElementsByClassName("cerrar")[0];
x.addEventListener("click", cerrar);
function cerrar() {
    modal_header.style.display = "none";
}
window.addEventListener("click", cerrar2);
function cerrar2 (evento) {
    if (evento.target == modal_header || evento.target == modal_datos) {
      modal_header.style.display = "none";
      modal_datos.style.display = "none";
    }
}

// --- Datos personales ---
let foto_datos = document.getElementById("foto_datos");
let foto_grande_datos = document.getElementById("foto_grande_datos");
let modal_datos = document.getElementById("modal_datos");
foto_datos.addEventListener("click", maximizar_datos);
function maximizar_datos() {
    modal_datos.style.display = "block";
    foto_grande_datos.src = this.src;
}

// ----- MOSTRAR/OCULTAR DATOS PERSONALES -----
let guia = true;
let boton_menu = document.getElementById("boton_menu");
let datos_ocultables = document.getElementById("datos_ocultables");
boton_menu.addEventListener("click", mostrar_ocultar_menu);
function mostrar_ocultar_menu() {
    datos_ocultables.classList.toggle("oculto", guia);
    guia = !guia;
}

// ----- MOSTRAR/OCULTAR BLOQUES INFORMACION PERSONAL
// Función generalizada
function mostrar_ocultar_info (subtitulo, icono) {
    if (subtitulo.className === "base subtitulos"){
        subtitulo.className = "base subtitulos oculto";
        icono.className = "icon-mas";
    } else {
        subtitulo.className = "base subtitulos";
        icono.className = "icon-menos";
    }
}

// Funciones particulares
let boton_info_1 = document.getElementById("boton_info_1");
boton_info_1.addEventListener("click", mostrar_ocultar_1);
function mostrar_ocultar_1() {
    let subtitulos_info_1 = document.getElementById("subtitulos_info_1");
    let icono_info_1 =document.getElementById("icono_info_1");
    mostrar_ocultar_info(subtitulos_info_1, icono_info_1);
}

let boton_info_2 = document.getElementById("boton_info_2");
boton_info_2.addEventListener("click", mostrar_ocultar_2);
function mostrar_ocultar_2() {
    let subtitulos_info_2 = document.getElementById("subtitulos_info_2");
    let icono_info_2 =document.getElementById("icono_info_2");
    mostrar_ocultar_info(subtitulos_info_2, icono_info_2);
}

let boton_info_3 = document.getElementById("boton_info_3");
boton_info_3.addEventListener("click", mostrar_ocultar_3);
function mostrar_ocultar_3() {
    let subtitulos_info_3 = document.getElementById("subtitulos_info_3");
    let icono_info_3 =document.getElementById("icono_info_3");
    mostrar_ocultar_info(subtitulos_info_3, icono_info_3);
}

let boton_info_4 = document.getElementById("boton_info_4");
boton_info_4.addEventListener("click", mostrar_ocultar_4);
function mostrar_ocultar_4() {
    let subtitulos_info_4 = document.getElementById("subtitulos_info_4");
    let icono_info_4 =document.getElementById("icono_info_4");
    mostrar_ocultar_info(subtitulos_info_4, icono_info_4);
}

// ----- AVISO EN CONSTRUCCIÓN -----
/* let link_plantilla = document.getElementById("link_plantilla");
link_plantilla.addEventListener("click", aviso);
function aviso() {
    if (alert("Esta función aún está en desarrollo, en cambio se le redirigirá al repositorio en GitHub.")) {
        window.open("https://github.com/Andeath1/CVProyecto");
    }
} */

// ----- LINK A GITHUB -----
let boton_github = document.getElementById("boton_github");
boton_github.addEventListener("click", redirección);
function redirección() {
    if (confirm("¿Desea ver el repositorio en GitHub?")) {
        window.open("https://github.com/Andeath1/CVProyecto");
    }
}

// ----- CAMBIO DE TEMA -----
// Evento click en el botón de temas, dispara las funciones
let boton_tema = document.getElementById("boton_tema");
boton_tema.addEventListener("click", cambiar_tema);

// Selecciona y guarda un tema específico
function seleccion_tema(nombre_tema) {
    localStorage.setItem('tema', nombre_tema);
    document.documentElement.className = nombre_tema;
}

// Cambia entre los dos temas
function cambiar_tema() {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_claro');
    } else {
        seleccion_tema('tema_oscuro');
    }
}

// Carga el tema que se guardó y el logo correspondiente
(function () {
    if (localStorage.getItem('tema') === 'tema_oscuro') {
        seleccion_tema('tema_oscuro');
    } else {
        seleccion_tema('tema_claro');
    }
})();
