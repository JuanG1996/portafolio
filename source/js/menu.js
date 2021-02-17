const menu = document.querySelector(".menu");
const opciones = document.querySelector(".opciones");

menu.addEventListener("click", ()=>{
    console.log("Hola soy el menu");
    if(opciones.classList.contains("mostrarMenu")){
        //Ocultar menu
        opciones.classList.remove("mostrarMenu");
        opciones.classList.add("ocultarMenu");
        menu.classList.remove("menu-cruz");
        menu.classList.add("menu-barras");
    }else{
        opciones.classList.remove("ocultarMenu");
        opciones.classList.add("mostrarMenu");
        menu.classList.remove("menu-barras");
        menu.classList.add("menu-cruz");
    }
    
})