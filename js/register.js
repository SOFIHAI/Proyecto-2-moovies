import { users } from './users.js';
import { messages, getFormData } from './utils.js';


const createUser = async (body) => {
  try {
    const resp = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    window.location.href = './login.html';
  } catch (error) {
    console.log(error);
  }
};

const userRegister = (e) => {
  e.preventDefault();

  const messageElement = document.getElementById('message');
  messageElement.textContent = '';


  const formData = getFormData(e);


  const validationEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validationPassword = /^(?=.*\d).{4,8}$/;

  const userExist = users.some((user) => user.email === formData.email);
  if (userExist)
    return (messageElement.textContent = messages.userAlreadyExist);

  if (!validationEmail.test(formData.email))
    return (messageElement.textContent = messages.emailFormatBad);

  if (formData.password !== formData.passwordCheck)
    return (messageElement.textContent = messages.passwordCheckbad);

  if (!validationPassword.test(formData.password)) {
    return (messageElement.textContent = messages.passwordRequirements);
  }

  const newUser = {
    ...formData,
    date: new Date(),
  };
  try {
    createUser(newUser);
  } catch (error) {
    console.log(error);
  }
};

const formRegister = document.getElementById('registerForm');
formRegister.addEventListener('submit', userRegister, false);