import myFooter from '../components/footer.js';
import navbar from '../components/navbar.js';
import {obtenerPeliculas } from "./utils.js";

const data = await obtenerPeliculas(); 


const updateDetalle = (id) => {
  const div = document.querySelector("#mainDetalle");
  console.log(document.body);
 let  resultado = data.find(pelicula=> pelicula.id == id);
  div.innerHTML = `
  <div class="container-fluid d-flex flex-row justify-content-center align-items-start" id="detallePeliculas">
  <div class="img-detalle">
      <img src="${resultado.img}" class="img-main img-fluid m-5" alt="detail">
  </div>
  <div
      class="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
      <h3 class="text-black fs-5 text-center tituloPelicula">${resultado.titulo}</h3>
      <h2 class="text-black fw-bold fs-2 text-center mb-5 añoPelicula">${resultado.año}</h2>
      <p class="sinopsis">
      ${resultado.sinopsis}
      </p>
  </div>
</div>
  `;
}

function cargardetalle() {
  let idComic = '';
  let query = window.location.search;
  let urlParams = new URLSearchParams(query);
  if (urlParams.get('pelicula')) {
    idComic = urlParams.get('pelicula');
    updateDetalle(idComic);
  }
}


window.onload = function () {
  navbar(); 
  myFooter(); 
  cargardetalle();
}
