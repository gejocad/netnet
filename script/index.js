import popularesDB from './popularesDB.js';
import animeDB from './animeDB.js';
import seriesDB from './seriesDB.js';


function mostrarPopulares(){

    let listPopulares = document.querySelector(".listPopulares")
    let populares = popularesDB

    listPopulares.innerHTML=''

    populares.forEach(item => {
        listPopulares.innerHTML += `
                <a href="pel.html" class="">
                    <div class="" id="pel${item.id}" data-pel=${item.id}>                
                        <img src="${item.imagen}" class="card-img imagenes" alt="...">
                    </div>
                </a>
                `
                
        
    });

  
    
        
        document.querySelector("#pel0").addEventListener('click', function () {
            localStorage.setItem("categoria", "populares")
            localStorage.setItem("pelId", 0)
        })
        document.querySelector("#pel1").addEventListener('click', function () {
            localStorage.setItem("categoria", "populares")
            localStorage.setItem("pelId", 1)
        })
        document.querySelector("#pel2").addEventListener('click', function () {
            localStorage.setItem("categoria", "populares")
            localStorage.setItem("pelId", 2)
        })
        document.querySelector("#pel3").addEventListener('click', function () {
            localStorage.setItem("categoria", "populares")
            localStorage.setItem("pelId", 3)
        }) 
       
  

}

function mostrarAnime(){

    let listAnime = document.querySelector(".listAnime")
    let anime = animeDB

    listAnime.innerHTML=''

    anime.forEach(item => {
        listAnime.innerHTML += `
                <a href="pel.html" class="">
                    <div class="" id="pel${item.id}" data-pel=${item.id}>                
                        <img src="${item.imagen}" class="card-img imagenes" alt="...">
                    </div>
                </a>`
        
        
    });

  
    localStorage.setItem("categoria", "anime")
        
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

function mostrarSeries(){

    let listSeries = document.querySelector(".listSeries")
    let series = seriesDB

    listSeries.innerHTML=''

    series.forEach(item => {
        listSeries.innerHTML += `
                <a href="pel.html" class="">
                    <div class="" id="pel${item.id}" data-pel=${item.id}>                
                        <img src="${item.imagen}" class="card-img imagenes" alt="...">
                    </div>
                </a>`
        
        
    });

  
    localStorage.setItem("categoria", "series")
        
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

mostrarPopulares()

mostrarAnime()

mostrarSeries()