
import { obtenerInformacion } from "../helpers/helpDB.js";



let contenedor = document.getElementById("box1"),
contenedor2 = document.getElementById("box2"),
contenedor3 = document.getElementById("box3");

let infoPeliculas = await obtenerInformacion();

infoPeliculas?.peliculasDestacadas?.map(pelicula => {
    let div = document.createElement("div");
    div.className = "col-lg-4 col-xl-4 col-md-4 col-4";
    div.id = "cards-1";
    div.innerHTML = `<div class="card-group">
    <div class="card">
      <img src="${pelicula.img}" class="card-img-top" alt="${pelicula.titulo}">
      <div class="card-body">
        <h5 class="card-title" id="titulo">${pelicula.titulo}</h5>
        <p class="card-text">${pelicula.año}</p>
        <button class="detalle-btn btn btn-secondary me-4 mb-2 position-absolute bottom-0" id="${pelicula.id}">Detalles</button>
      </div>; `
    contenedor.appendChild(div);
});

infoPeliculas?.agregadasRecientemente?.map(pelicula => {
  let div = document.createElement("div");
  div.className = "col-lg-4 col-xl-4 col-md-4 col-4";
  div.id = "cards-1";
  div.innerHTML = `<div class="card-group">
  <div class="card">
    <img src="${pelicula.img}" class="card-img-top" alt="${pelicula.titulo}">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo}</h5>
      <p class="card-text">${pelicula.año}</p>
      <button class="detalle-btn btn btn-secondary me-4 mb-2 position-absolute bottom-0" id="${pelicula.id}">Detalles</button>
    </div>; `
  contenedor2.appendChild(div);
});
infoPeliculas?.accion?.map(pelicula => {
  let div = document.createElement("div");
  div.className = "col-lg-4 col-xl-4 col-md-4 col-4";
  div.id = "cards-1";
  div.innerHTML = `<div class="card-group">
  <div class="card">
    <img src="${pelicula.img}" class="card-img-top" alt="${pelicula.titulo}">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo}</h5>
      <p class="card-text">${pelicula.año}</p>
      <button class="detalle-btn btn btn-secondary me-4 mb-2 position-absolute bottom-0" id="${pelicula.id}">Detalles</button>
    </div>; `
  contenedor3.appendChild(div);
});


function cargarBotones() {
  const listaBotones = document.querySelectorAll('.detalle-btn');
  listaBotones.forEach(boton => {
    boton.onclick = function (cargarBotones) {
      let url = '../detalles.html' ;
      window.open(url);
  };
});
}
cargarBotones();

export {cargarBotones};

  
  
  