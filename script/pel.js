import popularesDB from './popularesDB.js';
import animeDB from './animeDB.js';
import seriesDB from './seriesDB.js';

let id = localStorage.getitem("pelId");
mostrarPeli(id)

function mostrarPeli(id) {

    let imagen = document.querySelector(".imagen")
    let nombre = document.querySelector(".nombre")
    let coincidencia = document.querySelector(".coincidencia")
    let año = document.querySelector(".año")
    let duracion = document.querySelector(".duracion")
    let descripcion = document.querySelector(".descripcion")
    let elenco = document.querySelector(".elenco")
    let director = document.querySelector(".director")

    let categoria = localStorage.getItem("categoria")
    if (categoria == "populares")
        {var pelId = popularesDB[id]
    } else if(categoria == "anime") {
        var pelId = animeDB[id];
    } else {
        var pelId = seriesDB[id];
    }
}
