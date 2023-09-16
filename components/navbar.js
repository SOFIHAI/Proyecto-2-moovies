const header = document.querySelector('header');

const navbar = () => {
  const user = JSON.parse(localStorage.getItem('userLog')) || undefined;
  return (header.innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top fw-bold p-4">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">GRUPO2</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="../index.html">INICIO</a>
          </li>
          
          ${
            user
              ? `
              <li class="nav-item">
                <a class="nav-link text-white" href="../index.html">${user.userName}</a>
              </li>`
              : `
              <li class="nav-item">
                <a class="nav-link text-white" href="../login.html">LOGIN</a>
              </li>
          `
          }
          ${
            user
              ? ''
              : `
            <li class="nav-item">
              <a class="nav-link text-white" href="../register.html">REGISTRARME</a>
            </li>
          `
          }
          ${
            user?.role === 'ADMIN'
              ? `
              <li class="nav-item">
                <a class="nav-link text-white" href="../index.html">PANEL ADMIN</a>
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