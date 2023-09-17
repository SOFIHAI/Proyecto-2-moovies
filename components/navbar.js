const header = document.querySelector('header');

const navbar = () => {
  const user = JSON.parse(localStorage.getItem('userLog')) || undefined;
  return (header.innerHTML = `
  <div class="card-img-overlay align-content-end">
              <div class="cols-lg-8 col-md-6 col-sm-3 text-white m-5">
                <h1 class="titulo fw-bold">"Venom"</h1>
                <p class="descripcion fs-6 col-sm-12 text-white-50 m-1">
                Al descubrir que realizan experimentos con formas de vida alienígena, hará todo lo posible por sacar a la luz este tipo de excesos. Tratando de obtener evidencias de un extraño organismo independiente llamado simbionte, una de las criaturas escapa, tomando a Eddie como huésped.
                </p>
                <br>
                <button role="button" class="boton boton-estreno">
                    <a href="error404.html" class="text-decoration-none text-white "><i class="fa-solid fa-play"></i>Reproducir</a>
                </button>
              </div>
  <nav class="navbar navbar-expand-lg fixed-top fw-bold p-2">
  <div class="section-main">
        <div class="container-fluid d-flex justify-content-end align-items-center">
          <form action="" class="form-main form-inline nofloat-xs pull-right pull-left-sm">
            <div class="form-group form-input-fields form-group-lg has-feedback container-fluid d-flex flex-row justify-content-center align-items-center mt-3">
              <label class="sr-only" for="search">Search</label>
              <div class="input-group">
                <input type="text" class="form-control fs-5 input-search" name="q" id="buscar" placeholder="Buscar">
              </div>
              <button type="submit" class="btn-buscar btn btn-secondary mx-2 fs-5 fw-semibold">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <label for="menu">
        <img src="./img/imgNosotros/Disney_logo.png" class"menu-icono" alt="menu">
      <label/>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="../index.html">Inicio</a>
          </li>
          
          ${
            user
              ? `
              <li class="nav-item">
                <a class="nav-link text-white" href="../index.html">${user.userName}</a>
              </li>`
              : `
              <li class="nav-item">
                <a class="nav-link text-white" href="../login.html">Login</a>
              </li>
          `
          }
          ${
            user
              ? ''
              : `
            <li class="nav-item">
              <a class="nav-link text-white" href="../register.html">Register</a>
            </li>
          `
          }
          ${
            user?.role === 'ADMIN'
              ? `
              <li class="nav-item">
                <a class="nav-link text-white" href="../index.html">Panel de Admin.</a>
              </li>
              `
              : ''
          }
          ${
            user?.role === 'USER'
              ? `
              <li class="nav-item">
                <a class="nav-link text-white" href="../index.html">MIS PELIS</a>
              </li>
              `
              : ''
          }
          ${
            user
              ? `
              <li class="nav-item">
                <button class="btn text-white justify-content-md-end" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>CERRAR SESION</button>
              </li>
              `
              : ''
          }
        </ul>
      </div>
    </div>
  </nav>`);
};

export default navbar;