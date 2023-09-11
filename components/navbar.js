const header = document.querySelector('header');

const navbar = () => {
  const user = JSON.parse(localStorage.getItem('userLog')) || undefined;
  return (header.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./index.html">INICIO</a>
          </li>
          
          ${
            user
              ? `
              <li class="nav-item">
                <a class="nav-link" href="./index.html">${user.userName}</a>
              </li>`
              : `
              <li class="nav-item">
                <a class="nav-link" href="./login.html">LOGIN</a>
              </li>
          `
          }
          ${
            user
              ? ''
              : `
            <li class="nav-item">
              <a class="nav-link" href="./register.html">REGISTARME</a>
            </li>
          `
          }
          ${
            user?.role === 'ADMIN'
              ? `
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Panel Admin</a>
              </li>
              `
              : ''
          }
          ${
            user
              ? `
              <li class="nav-item">
                <button class="btn btn-dark" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>Close session</button>
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