import navbar from '../components/navbar.js';

const userData = JSON.parse(localStorage.getItem('userLog'));

if (userData) {
  document.getElementById(
    'saludo'
  ).textContent = `Bienvenido ${userData.userName}`;
}

document.addEventListener('DOMContentLoaded', () => {
  navbar();
});
