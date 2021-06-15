    
document.addEventListener('DOMContentLoaded', () => {
    
    let nameSave = localStorage.getItem("Name");
    let emailSave = localStorage.getItem("Email");
    let CantidadSave = localStorage.getItem("Cantidad");

    let total = 4000 * CantidadSave;
    document.getElementById("header").innerText = `${nameSave} gracias
     por preferirnos!`;
    document.getElementById("text").innerText = ` Para pagar y descargar 
    tu contenido seleccionado por favor revisa el email que enviamos a ${emailSave}.
    ${CantidadSave} tokens seran habilitados por un total de $${total} pesos`
    }
)