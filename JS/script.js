import { barcelona, roma, paris, londres } from './ciudades.js';

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
let imagenElemento = document.getElementById('imagen');

enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // Remover active
        enlaces.forEach( function(enlace){
            enlace.classList.remove('active');
        })

    // Agregar active
    this.classList.add('active');

    // Traer info del objeto correspondiente a la eleccion
    let contenido = obtenerContenido(this.textContent);
    
    // Mostrar contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
    imagenElemento.src = contenido.imagen;
    })
})

// Funcion para obtener contenido de la ciudad
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace]
}