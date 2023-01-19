const loginButton = document.querySelector('.login-button');
const registerButton = document.querySelector('.register-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Go to login Page
  window.location.href = '../LoginPage/login.html';
});

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Go to registation
  window.location.href = '../RegisterPage/register.html';
});