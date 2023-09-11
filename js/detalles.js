import { obtenerInformacion } from "../helpers/helpDB";

let detalles = await obtenerInformacion();

const detalles = document.getElementById('detallePelicula');

const cargarDeatlles = () => {
  const detallesPeliculas = detalles || undefined;
  return (header.innerHTML = `

const pagDetalles = document.getElementById('pagDetalles');

const detalles = .getItem('userLog')) || undefined;

pagDetalles.innerHTML = `<div class="detalle container-fluid d-flex flex-row justify-content-center align-items-start">
<div class="img-detalle">
    <img src="${pelicula.img}" class="img-main img-fluid m-5" alt="detail">
</div>
<div
    class="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
    <h3 class="text-black fs-5 text-center">${pelicula.año}</h3>
    <h2 class="text-black fw-bold fs-2 text-center mb-5" id="titulo">${pelicula.titulo}</h2>
    <div class="container-fluid d-flex flex-row justify-content-start align-items-center mb-5">
        <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
           
            <h4></h4>
        </div>
        
    </div>
    <p class="sinopsis">${pelicula.sinopsis}</p>
   
</div>
</div>`;