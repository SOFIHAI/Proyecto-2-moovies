

const formAgregarPeli = document.getElementById("formAgregarPeliModal"),
  bodyListPeli = document.getElementById('bodyListPeli'),
  listEstadoPeli = document.getElementById('estadoPeli'),
  listEstadoModificarPeli = document.getElementById('estadoPeliModificar'),
  btnCancelar = document.getElementById('btnCancelar'),
  btnFavoritePeli = document.getElementsByClassName('btnFavoriteComic'),
  formModificarPeli = document.getElementById("formModificarPeliModal"),
  btnCloseModal = document.getElementById("bntCloseModal"),
  btnCancelarModificacion = document.getElementById("btnCancelarModificacion"),
  fragmento = document.createDocumentFragment();
  
  const getPeliculas = async () => {
    try {
      const resp = await fetch('http://localhost:3000/peliculas');
      const peliculas = await resp.json();
      peliculas.forEach(el => {
      bodyListPeli.querySelector('codigo').textContent = el.codigo;
      bodyListPeli.querySelector('nombre').textContent = el.titulo;

      let clone = document.importNode(bodyListPeli, true);
      fragmento.appendChild(clone);
    });
       bodyListPeli.getElementById('bodyListPeli').appendChild(fragmento);
    } catch (error) {

    }
  };

document.addEventListener("DOMContentLoaded", getPeliculas); 
 
