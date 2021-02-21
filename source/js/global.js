document.addEventListener("DOMContentLoaded", ()=>{
    contenedorProyectos = document.querySelector("#proyectos");
    //Si estamos en la ventana de proyectos
    if(contenedorProyectos){
        // Carga los proyectos e insertalos en la web
        extraerDatos();
    }
});