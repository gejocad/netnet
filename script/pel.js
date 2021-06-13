import popularesDB from './popularesDB.js';
import animeDB from './animeDB.js';
import seriesDB from './seriesDB.js';

let id = localStorage.getItem("pelId");
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
        {var pelId = popularesDB[id], data = popularesDB} 
    else if(categoria == "anime") {
        var pelId = animeDB[id], data = animeDB;
    } else {
        var pelId = seriesDB[id], data = seriesDB;
    }

    imagen.innerHTML = ''
    nombre.innerHTML = ''
    coincidencia.innerHTML = ''
    año.innerHTML = ''
    duracion.innerHTML = ''
    descripcion.innerHTML = ''
    elenco.innerHTML = ''
    director.innerHTML = ''

    imagen.innerHTML +=`
        <img id="img-detalle" src="${pelId.imagen}">
    `
    nombre.innerHTML +=`
        <h1 id="titulo" class="">${pelId.nombre}</h1>
    `
    coincidencia.innerHTML +=`
        <li id="coincidencia" class="minDetalle" class="">${pelId.coincidencia}</li>
    `
    año.innerHTML +=`
    <li class="minDetalle" style="margin-right: 8px;margin-left: 30px;">${pelId.año}</li>
    `
    duracion.innerHTML +=`
    <li class="liR">R</li>
    <li class="minDetalle" style="margin-left: 15px;margin-right: 8px;">${pelId.duracion}</li>
    `
    descripcion.innerHTML +=`
    <div class="descripcion">${pelId.descripcion}</div>
    `
    elenco.innerHTML +=`
    <p>${pelId.elenco}</p>
    `
    director.innerHTML +=`
    <p>${pelId.director}</p>
    `
    listarSimilares(data)
}

function listarSimilares(data){
    let listSimilares = document.querySelector(".listSimilares")

    listSimilares.innerHTML=''

    data.forEach(item => {
        listSimilares.innerHTML += `
                <a href="pel.html" class="">
                    <div class="" id="pel${item.id}" data-pel=${item.id}>                
                        <img src="${item.imagen}" class="card-img imagenes" alt="...">
                    </div>
                </a>
                `
        
    });
    
    document.querySelector("#pel0").addEventListener('click', function () {
        localStorage.setItem("pelId", 0)
    })
    document.querySelector("#pel1").addEventListener('click', function () {
        localStorage.setItem("pelId", 1)
    })
    document.querySelector("#pel2").addEventListener('click', function () {
        localStorage.setItem("pelId", 2)
    })
    document.querySelector("#pel3").addEventListener('click', function () {
        localStorage.setItem("pelId", 3)
    }) 
}

