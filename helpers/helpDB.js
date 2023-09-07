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
  
  export  {
    obtenerInformacion,
  }