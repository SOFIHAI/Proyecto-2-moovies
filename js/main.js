import myFooter from '../components/footer.js';
import navbar from '../components/navbar.js';



const userData = JSON.parse(localStorage.getItem('userLog'));
/*
if (userData) {
  document.getElementById(
    'saludo'
  ).textContent = `Bienvenido ${userData.userName}`;
}
*/
document.addEventListener('DOMContentLoaded', () => {
  navbar();
});

document.addEventListener('DOMContentLoaded', () => {
  myFooter();
});
