//Altas, bajas y modificaciones

let indice = -1;
let accion = "A";
let tareas = localStorage.getItem("tareas");
tareas=JSON.parse(tareas);
if(tareas==null) tareas = [];
//
function lista(){
  document.getElementById("listado").innerHTML = "tabla";
  let tabla = "<tr><th>nombre</th><th>descripcion</th><th>duracion</th><th>sinopsis</th><th>Borrar</th><th>Editar</th><th>estrella</th></tr>";
  for(let i in tareas){
    let tarea = JSON.parse(tareas[i]);
    tabla += "<tr><td>"+tarea.nombre+"</td>";
    tabla += "<td>"+tarea.descripcion+"</td>";
    tabla += "<td>"+tarea.duracion+"</td>";
    tabla += "<td>"+tarea.sinopsis+"</td>";
    tabla += "<td><button type='button' class='btn btn-danger' onClick='borra("+i+")'><i class='fa fa-close'></i> Borrar</button></td>";
    tabla += "<td><button type='button' class='btn btn-warning' onClick='edita("+i+")'><i class='fa fa-edit'></i> Modificar</button></td>";
    tabla += "<td><button type='button' class='btn btn-warning' onClick='modificar("+i+")'><i class='fa fa-edit'></i> ★</button></td>";
    tabla += "</tr>";
  }
  document.getElementById("listado").innerHTML = tabla;
}
function alta(){
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let duracion = document.getElementById("duracion").value;
  let sinopsis = document.getElementById("sinopsis").value;
  //
  let tarea = JSON.stringify({
    nombre:nombre,
    descripcion:descripcion,
    duracion:duracion,
    sinopsis:sinopsis,
  });
  //añadir al objeto JSON
  if(accion=="A"){
    tareas.push(tarea);
    localStorage.setItem("pelicula", JSON.stringify(tareas));
    alert("Tarea añadida existosamente");
  } else {
    tareas[indice]= tarea;
    localStorage.setItem("tareas", JSON.stringify(tareas));
    alert("Tarea modificada existosamente");
  }
  lista();
  document.getElementById("nombre").value = "nombre";
  document.getElementById("descripcion").value = "descripcion";
  document.getElementById("duracion").value = "duracion";
  document.getElementById("sinopsis").value = "sinopsis";
  return true;
}
function borra(i){
  indice = i;
  let tarea = JSON.parse(tareas[indice]);
  let nombre = tarea.nombre;
  if(confirm("¿Desea borrar la pelicula '"+nombre+"'?")){
    tareas.splice(indice,1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    alert("La pelicula"+nombre+"' ha sido eliminada");
  }
  lista();
}
function edita(i){
  indice = i;
  accion = "E";
  let tarea = JSON.parse(tareas[indice]);
  document.getElementById("nombre").value = tarea.nombre;
  document.getElementById("descripcion").value = tarea.descripcion;
  document.getElementById("duracion").value = tarea.duracion;
  document.getElementById("sinopsis").value = tarea.sinopsis;
}
window.onload = function(){
  lista();
}
 
