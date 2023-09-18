const ExpRegTitulo = /^[\w\s():\-?!¡¿áéíóúÁÉÍÓÚüÜñÑ"]+$/i,
  ExpRegURL =
    /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
  ExpRegTexto = /^[\x00-\xFF]*$/;

export const messages = {
  passwordRequirements:
    "La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.",
  userAlreadyExist: "El usuario ya se encuentra registrado.",
  userAlreadyLog: "Ya se encuentra un usuario logueado",
  emailFormatBad: "El formato de email es incorrecto.",
  passwordCheckbad: "Las contraseñas no coinciden.",
  userNotExist: "El usuario no existe.",
  userOrPasswordBad: "Usuario o contraseña erronea.",
  closeSessionPrompt: "Quieres cerrar sesion de esa cuenta?",
};

/**
 * @param {Event} e Recibe el evento de el formulario.
 * @returns Un objeto con todas las propiedades y valores de los inputs.
 */

export const getFormData = (e) => {
  const formData = new FormData(e.target);
  const formObject = {};
  for (const [key, value] of formData.entries()) {
    formObject[key] = value;
  }
  return formObject;
};

async function obtenerInformacion() {
  let informacion = await fetch("../dataBase/db.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });

  return informacion;
}

async function obtenerPeliculas() {
  let informacion = await fetch("../dataBase/db.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });

  return informacion.peliculas;
}

function validarPelicula(pelicula) {
  if (
    pelicula.titulo.length == 1 ||
    pelicula.titulo.match(ExpRegTitulo) == null
  )
    return "Ingrese un Título correcta de la Película!";
  if (
    pelicula.categoria.length == 1 ||
    pelicula.categoria.match(ExpRegTitulo) == null
  )
    return "Ingrese una categoría correcta de la Película!";
  if (
    pelicula.sinopsis.length == 1 ||
    pelicula.sinopsis.match(ExpRegTexto) == null
  )
    return "Ingrese una sinopsis correcta de la Película!";
  if (pelicula.img.length == 1 || pelicula.img.match(ExpRegURL) == null)
    return "Ingrese una URL de imagen correcta de la Película!";
  return null;
}
function generarID() {
  var id = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);
    id += str.charAt(char);
  }
  return id;
}
function limpiarInputs() {
  document.getElementById("titulo").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("anio").value = "";
  document.getElementById("sinopsis").value = "";
  document.getElementById("imagen").value = "";
}
export {
  obtenerInformacion,
  obtenerPeliculas,
  validarPelicula,
  generarID,
  limpiarInputs,
};
