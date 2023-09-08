import { obtenerInformacion } from "../helpers/helpDB.js";

let contenedor = document.getElementById("contendorPeliculas");


let infoPeliculas = await obtenerInformacion();

infoPeliculas?.peliculasDestacadas?.map(pelicula => {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-xl-4 col-md-4 col-4";
    div.id = "cards-1";
    div.innerHTML = `
    <div class="contenedorImgPelicula">
    <img src="${pelicula.img}" class="img-thumbnail" alt="">
    
    
  </div>
     <h1 class="fs-2">${pelicula.titulo}</h1>
     <h2 class="fs-4">${pelicula.categoria}</h2>
     <p>${pelicula.año}</p>
    `; 
    contenedor.appendChild(div);
}); 

infoPeliculas?.agregadasRecientemente?.map(pelicula => {
  let div2 = document.createElement("div2");
    div2.className = "col-lg-4 col-xl-4 col-md-4 col-4";
    div2.id = "cards-2";
    div2.innerHTML = `
    <div class="contenedorImgPelicula2">
    <img src="${pelicula.img}" class="img-thumbnail" alt="">
    
    
  </div>
     <h1 class="fs-2">${pelicula.titulo}</h1>
     <h2 class="fs-4">${pelicula.categoria}</h2>
     <p>${pelicula.año}</p>
    `; 
    contenedor.appendChild(div2);
});

infoPeliculas?.accion?.map(pelicula => {
  let div3 = document.createElement("div3");
    div3.className = "col-lg-4 col-xl-4 col-md-4 col-4";
    div3.id = "cards-3";
    div3.innerHTML = `
    <div class="contenedorImgPelicula3">
    <img src="${pelicula.img}" class="img-thumbnail" alt="">
    
    
  </div>
     <h1 class="fs-2">${pelicula.titulo}</h1>
     <h2 class="fs-4">${pelicula.categoria}</h2>
     <p>${pelicula.año}</p>
    `; 
    contenedor.appendChild(div3);
});
