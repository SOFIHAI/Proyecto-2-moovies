import myFooter from '../components/footer.js';
import navbar from '../components/navbar.js';
import { generarID, limpiarInputs, obtenerPeliculas, validarPelicula } from './utils.js';

let formAdmin = document.getElementById("formAdministracion");
let pelicula = await obtenerPeliculas();
let isUpdate = false; 
let peliculas = localStorage.getItem("peliculas") ? JSON.parse(localStorage.getItem("peliculas")) : pelicula;

function lista() {
  
  document.getElementById("listado").innerHTML = "tabla";
  let tabla = "<tr><th>Imagen</th><th>Titulo</th><th>Categoria</th><th>Año</th><th>sinopsis</th><th>Borrar</th><th>Editar</th><th>Favorito</th></tr>";

  peliculas?.map(pelicula => {
    if(pelicula.estado == true){
      tabla += "<tr><td><img  src=" + "" + pelicula.img + "/></td>";
      tabla += "<td>" + pelicula.titulo + "</td>";
      tabla += "<td>" + pelicula.categoria + "</td>";
      tabla += "<td>" + pelicula.año + "</td>";
      tabla += "<td>" + pelicula.sinopsis + "</td>";
      tabla += "<td><button type='button' class='btn btn-danger btnEliminar' id = " + ''+  pelicula.id + " ><i class='fa fa-close'></i> Borrar</button></td>";
      tabla += "<td><button type='button' class='btn btn-warning btnModificar' id = " + ''+ pelicula.id + " ><i class='fa fa-edit'></i> Modificar</button></td>";
      tabla += "<td><button type='button' class='btn btn-success btnPublicado' id = " + '' + pelicula.id + " ><i class='fa fa-edit'></i> ★</button></td>";
      tabla += "</tr>";
      document.getElementById("listado").innerHTML = tabla;
    }
  })
  eliminarPelicula();
  publicarPelicula(); 
  modificarPelicula(); 
}

formAdmin.addEventListener("submit",validarFormulario);

function validarFormulario(event){
  if (!formAdmin.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    formAdmin.classList.add('was-validated');
  } else{
    event.preventDefault();
    event.stopPropagation();
    altaModificacion(); 
    limpiarInputs(); 
  }
}
function altaModificacion() {
  let titulo = document.getElementById("titulo").value,
    categoria = document.getElementById("categoria").value,
    año = document.getElementById("anio").value,
    sinopsis = document.getElementById("sinopsis").value,
    img = document.getElementById("imagen").value;
if(!isUpdate){
  let nuevaPelicula = {
    id: generarID(),
    titulo: titulo,
    categoria: categoria,
    año: año,
    sinopsis: sinopsis,
    img: img,
    estado: true,
    publicado: true
  };
  let respuesta = validarPelicula(nuevaPelicula);

  if(respuesta) return alert(respuesta); 
  let peliculaExistente = peliculas?.find(pelicula => pelicula.titulo  == titulo); 
  if(peliculaExistente) return alert("Pelicula ya creada!"); 
  peliculas?.push(nuevaPelicula); 
  alert("Pelicula creada"); 
  localStorage.setItem("peliculas", JSON.stringify(pelicula));
  lista();
}else{
  let idModificado = localStorage.getItem("idModificacion"); 
  let updatePeliculas = peliculas?.map(pelicula => {
    if(pelicula.id == idModificado){
      pelicula.titulo = titulo;
      pelicula.categoria = categoria; 
      pelicula.año = año;
      pelicula.sinopsis = sinopsis; 
      pelicula.img = img; 
    }
    return pelicula; 
  })
  localStorage.setItem("peliculas", JSON.stringify(updatePeliculas));
  localStorage.removeItem("idModificacion");
  alert("Pelicula Modifica!"); 
  lista();
}

}

function eliminarPelicula() {
  let btnEliminar = document.getElementsByClassName('btnEliminar'); 
  Array.from(btnEliminar).forEach(function (button) {
    button.addEventListener('click', function () {
      borrarPelicula(button.id);
    });
  });
}

function borrarPelicula(id) {
  let respuesta = confirm("¿Desea eliminar la pelicula seleccionada?");
  if(respuesta){
    let updatePeliculas = peliculas?.map(pelicula => {
      if(pelicula.id == id){
        pelicula.estado = false; 
      }
      return pelicula;
    })
    localStorage.setItem("peliculas", JSON.stringify(updatePeliculas)); 
    lista(); 
  }else{
    window.location.reload(); 
  }
}
function publicarPelicula() {
  let btnPublicado = document.getElementsByClassName('btnPublicado'); 
  Array.from(btnPublicado).forEach(function (button) {
    button.addEventListener('click', function () {
      cambiarPublicado(button.id);
    });
  });
}
function cambiarPublicado(id) {
  let respuesta = confirm("¿Desea cambiar el publicado de la pelicula seleccionada?");
  if(respuesta){
    debugger
    let updatePeliculas = peliculas?.map(pelicula => {
      if(pelicula.id == id){
        pelicula.publicado = pelicula.publicado ? false : true; 
      }
      return pelicula;
    })
    localStorage.setItem("peliculas", JSON.stringify(updatePeliculas)); 
    lista(); 
  }else{
    window.location.reload(); 
  }
}
function modificarPelicula () {
  let btnModificar = document.getElementsByClassName('btnModificar'); 
  Array.from(btnModificar).forEach(function (button) {
    button.addEventListener('click', function () {
      editarPelicula(button.id);
    });
  });
}

function editarPelicula(id) {
  let peliculaEncontrada = peliculas?.find(pelicula => pelicula.id == id); 
  if(peliculaEncontrada){
    document.getElementById("titulo").value = peliculaEncontrada.titulo; 
    document.getElementById("categoria").value = peliculaEncontrada.categoria; 
    document.getElementById("anio").value = peliculaEncontrada.año; 
    document.getElementById("sinopsis").value = peliculaEncontrada.sinopsis; 
    document.getElementById("imagen").value = peliculaEncontrada.img;
    isUpdate = true; 
    localStorage.setItem("idModificacion" , id); 
  }
}
window.onload = function () {
  lista();
  navbar();
  myFooter(); 
}