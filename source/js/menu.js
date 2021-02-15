const menu = document.querySelector(".menu");
const opciones = document.querySelector(".opciones");

menu.addEventListener("click", ()=>{
    console.log("Hola soy el menu");
    if(opciones.classList.contains("mostrarMenu")){
        opciones.classList.remove("mostrarMenu");
        opciones.classList.add("ocultarMenu");
    }else{
        opciones.classList.remove("ocultarMenu");
        opciones.classList.add("mostrarMenu");
    }
    
})