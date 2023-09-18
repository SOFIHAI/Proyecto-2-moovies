import {obtenerPeliculas } from "./utils.js";


const data = await obtenerPeliculas(); 

function cargardetalle() {
  let idPelicula = '';
  let query = window.location.search;
  let urlParams = new URLSearchParams(query);
  if (urlParams.get('pelicula')) {
    idPelicula = urlParams.get('pelicula');
    updateDetalle(idPelicula);
  }
}

function updateDetalle(id) {
  const div = document.getElementById("mainDetalle");
  console.log(document.body);
 let  resultado = data.find(pelicula=> pelicula.id == id);
  div.innerHTML = `
  <div class="container-fluid d-flex flex-row justify-content-center align-items-start detalle mt-5 pt-5" id="detallePeliculas">
  <div class="img-detalle">
      <img src="${resultado.img}" class="img-main img-fluid m-5" alt="detail">
  </div>
  <div class="descripcion-detalle d-flex flex-column align-items-center text-wrap">
      <h2 class="text-white fw-bold fs-5  tituloPelicula">${resultado.titulo}</h2>
      <h3 class="text-white fs-2  mb-5">${resultado.año}</h3>
      <p class="sinopsis text-white ">Sinopsis: ${resultado.sinopsis}
      </p>
  </div>
</div>
  `;
}



window.onload = function () {
   
  cargardetalle();
}



window.onload = function () {
   
  cargardetalle();
}