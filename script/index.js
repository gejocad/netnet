import popularesDB from './popularesDB.js';
import animeDB from './animeDB.js';
import seriesDB from './seriesDB.js';


function mostrarPopulares(){

    let listPopulares = document.querySelector(".listPopulares")
    let populares = popularesDB

    listPopulares.innerHTML=''

    populares.forEach(item => {
        listPopulares.innerHTML += `
                    <div class="" id="pel${item.id}" data-pel=${item.id}>                
                        <img src="${item.imagen}"alt="...">
                    </div>`
        
        
    });

  
    localStorage.setItem("categoria", "populares")
        
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