const loginButton = document.querySelector('.login-button');
const registerButton = document.querySelector('.register-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  // przekieruj do widoku logowania
  window.location.href = 'login.html';
});

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  // przekieruj do widoku rejestracji
  window.location.href = 'register.html';
});