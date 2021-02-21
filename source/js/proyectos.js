let arrayProyectos = [];

async function extraerDatos(){
    contenedorProyectos = document.querySelector("#proyectos");

    proyectos = await fetch("./build/json/proyectos.json")
    .then(resp =>{
        return resp.json()
    });

    proyectos.forEach((proyecto)=>{
        const {id, img } = proyecto;
        nuevoProyecto = document.createElement("div");
        nuevoProyecto.classList.add("proyecto");
        nuevoProyecto.dataset.idProyecto = id;
        
        imgProyecto = document.createElement("img");
        imgProyecto.src = img;
        imgProyecto.onclick = abrirVistaProyecto;

        nuevoProyecto.appendChild(imgProyecto);
        contenedorProyectos.appendChild(nuevoProyecto);
        arrayProyectos = [...arrayProyectos, proyecto];
    });
}

//Vista del proyecto despues de dar clic
function abrirVistaProyecto(e){
    const proyectoId = parseInt(e.target.parentNode.dataset.idProyecto);
    arrayProyectos.forEach(proyecto =>{
        const {id, nombre, tipoProyecto, tecnologias, responsive, comentario, img, web, github } = proyecto;
        if(id === proyectoId){
            console.log("Entre");
            //Contenedor del proyecto
            vistaProyecto = document.createElement("div");
            vistaProyecto.classList.add("vista-proyecto");

            //Titulo del proyecto
            tituloProyecto = document.createElement("p");
            tituloProyecto.classList.add("titulo");
            tituloProyecto.textContent = nombre;

            //Creando la imagen
            imgProyecto = document.createElement("img");
            imgProyecto.src = img;
            imgProyecto.setAttribute("alt",`${nombre}`);

            //Informacion del proyecto
            infoProyecto = document.createElement("div");
            tipoInfo = crearParrafoVista("Tipo de proyecto", tipoProyecto);
            responsiveInfo = crearParrafoVista("¿Responsive?", responsive);
            tecnologiasInfo = crearParrafoVista("Tecnologiás usadas:", tecnologias);
            descripcionInfo = crearParrafoVista("Descripción:", comentario);
            infoProyecto.appendChild(tipoInfo);
            infoProyecto.appendChild(responsiveInfo);
            infoProyecto.appendChild(tecnologiasInfo);
            infoProyecto.appendChild(descripcionInfo);

            //Boton de visitar sition
            btnVisitarProyecto = document.createElement("buton");
            btnVisitarProyecto.classList.add("btn", "btn-principal");
            btnVisitarEnlace = document.createElement("a");
            btnVisitarEnlace.href = web;
            btnVisitarEnlace.target = "_blank";
            btnVisitarEnlace.textContent = "Visitar sitio ►";
            btnVisitarProyecto.appendChild(btnVisitarEnlace);

            //Crear boton de cerrar ventana
            btnCerrarProyecto = document.createElement("span");
            btnCerrarProyecto.classList.add("cerrar");
            btnCerrarProyecto.textContent = "X";
            btnCerrarProyecto.onclick = cerrarVistaProyecto;

            //Agregar todo a contenedor de proyecto
            vistaProyecto.appendChild(tituloProyecto);
            vistaProyecto.appendChild(imgProyecto);
            vistaProyecto.appendChild(infoProyecto);
            vistaProyecto.appendChild(btnVisitarProyecto);
            vistaProyecto.appendChild(btnCerrarProyecto);

            //Agregar al DOM
            const vistaProyecto__contenedor = document.querySelector(".vistaProyecto__contenedor");
            vistaProyecto__contenedor.appendChild(vistaProyecto);
            vistaProyecto__contenedor.classList.add("activarVista");
        }
    })
}

function crearParrafoVista(llave, valor){
    parrafoInfo = document.createElement("p");
    parrafoInfo.innerHTML = `<span class="bold">${llave}: </span>${valor}`;
    return parrafoInfo;
}

function cerrarVistaProyecto(){
    vistaProyecto = document.querySelector(".vista-proyecto");
    vistaProyecto.remove();
    const vistaProyecto__contenedor = document.querySelector(".vistaProyecto__contenedor");
    vistaProyecto__contenedor.classList.remove("activarVista");
}