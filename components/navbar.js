const header = document.querySelector('header');

const navbar = () => {
  const user = JSON.parse(localStorage.getItem('userLog')) || undefined;
  return (header.innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top fw-bold p-2">
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