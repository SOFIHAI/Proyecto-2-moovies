import myFooter from '../components/footer.js';
import navbar from '../components/navbar.js';
import { obtenerInformacion } from "./utils.js";



document.addEventListener('DOMContentLoaded', () => {
  navbar();
});

document.addEventListener('DOMContentLoaded', () => {
  myFooter();
});



let contenedor = document.getElementById("contendorPeliculas");


let infoPeliculas = await obtenerInformacion();
console.log(infoPeliculas);


infoPeliculas?.peliculas?.map(pelicula => {
  let div = document.createElement("div");
  div.className = "col-lg-4 col-xl-4 col-md-4 col-4 mt-5";
  div.id = "cards-1";
  div.innerHTML = `
  <div class="contenedorImgPelicula">
  <img src="${pelicula.img}" alt="" class="h-100 w-100">
  
</div>
   <h5>${pelicula.titulo}</h5>
   
  `; 
  contenedor.appendChild(div);
}); 