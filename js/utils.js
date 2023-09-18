export const messages = {
  passwordRequirements:
    'La contraseña debe tener entre 4 y 8 dígitos e incluir al menos un dígito numérico.',
  userAlreadyExist: 'El usuario ya se encuentra registrado.',
  userAlreadyLog: 'Ya se encuentra un usuario logueado',
  emailFormatBad: 'El formato de email es incorrecto.',
  passwordCheckbad: 'Las contraseñas no coinciden.',
  userNotExist: 'El usuario no existe.',
  userOrPasswordBad: 'Usuario o contraseña erronea.',
  closeSessionPrompt: 'Quieres cerrar sesion de esa cuenta?',
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

async function obtenerInformacion  () {
    
  let informacion = await fetch('../dataBase/db.json')
  .then(response => response.json())
  .then(data => {
      return data 
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
  
  return informacion;
  } 
  
  async function obtenerPeliculas  () {
    
    let informacion = await fetch('../dataBase/db.json')
    .then(response => response.json())
    .then(data => {
        return data 
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
    
    return informacion.peliculas;
    } 
    
  export  {
    obtenerInformacion,
    obtenerPeliculas
  }

