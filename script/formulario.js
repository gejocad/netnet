
const precio=4000;
let cantidad;
let mnj;
let alerta;
let total;

function mover(){
  
}

document.querySelector("#button").addEventListener("click", function LocalStorage(){
   
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    cantidad = document.getElementById('cant').value;

    
        if(isNaN(name)){
            localStorage.setItem("Name", name);
            localStorage.setItem("Email", email);
            localStorage.setItem("Cantidad", cantidad);
            window.location.href = "gracias.html";
        }else{
             alert("Debe ingresar un nombre correcto");
        }
        
    }
    
    
);



function comprar() {
eval(precio * cantidad);
cantidad = document.getElementById("cant").value;

  if (cantidad <= 0) {
   
    mnj= "Ingrese un monto valido.";
    document.getElementById("mensaje").innerHTML = "Ingrese un monto valido";
  }
  
 else if (cantidad >=1) {

    mnj =
    "Total a pagar: " +
        "\n" +
        "$ " +
        eval(precio * cantidad);
  document.getElementById("mensaje").innerText = mnj;
    }
 return cantidad;
}
