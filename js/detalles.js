import myFooter from '../components/footer.js';
import navbar from '../components/navbar.js';

import { obtenerInformacion } from "./utils.js";


document.addEventListener('DOMContentLoaded', () => {
  myFooter();
});

document.addEventListener('DOMContentLoaded', () => {
  navbar();
});
/*
document.getElementById('detalle-btn').addEventListener('click', cargarDetalles, true);


let infoPeliculas = await obtenerInformacion();
console.log(infoPeliculas);

let detallesPeliculas = document.getElementById("mainDetalle");

const cargarDetalles = () => {
  infoPeliculas?.peliculas?.map(pelicula => {
    pelicula.forEach(p => {
      if (p.id ===) {
        
      }
    });()
    let div1 = document.createElement("div1");
    div.innerHTML = `
    <div class="detalle container-fluid d-flex flex-row justify-content-center align-items-start">
            <div class="img-detalle">
                <img src="${pelicula.img}" class="img-main img-fluid m-5" alt="detail">
            </div>
            <div
                class="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
                <h3 class="text-black fs-5 text-center"></h3>
                <h2 class="text-black fw-bold fs-2 text-center mb-5" id="tituloPelicula">${pelicula.titulo}</h2>
                <div class="container-fluid d-flex flex-row justify-content-start align-items-center mb-5">
                    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
                        
                        <h4></h4>
                    </div>
                    
                </div>
                <p class="sinopsis"></p>
                
            </div>
        </div>
     
    `; 
    detallesPeliculas.appendChild(div1);
  }); 
}
cargarDetalles();
*/



const cargarPeliculas = async(id) => {
try {
  let res = await fetch('http://localhost:3000/peliculas'),
  data = await res.json();
 console.log(data);
  const resultado = data.find(pelicula=> pelicula.id === id);
/* data.find(pel => {
detalles.querySelector('.img-main').textContent = pel.img;
detalles.querySelector('.tituloPelicula').textContent = pel.titulo;

 })*/
 console.log(resultado);
  }
catch (error) {
  console.log(error);
}
}

export  {cargarPeliculas};
