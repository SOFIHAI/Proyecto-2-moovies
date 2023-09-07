import { obtenerInformacion } from "../helpers/helpDB.js";

let contenedor = document.getElementById("contendorPeliculas");


let infoPeliculas = await obtenerInformacion();

infoPeliculas?.peliculasDestacadas?.map(pelicula => {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-xl-4 col-md-4 col-4";
    div.id = "cards-1";
    div.innerHTML = `
    <div class="contenedorImgPelicula">
    <img src="${pelicula.img}" alt="">
    
  </div>
     <h1>${pelicula.title}</h1>
     <h2>${pelicula.category}</h2>
     <p>${pelicula.año}</p>
    `; 
    contenedor.appendChild(div);
}); 
