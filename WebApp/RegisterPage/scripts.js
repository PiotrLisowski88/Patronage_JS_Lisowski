      const form = document.querySelector('#register-form');
      const emailInput = document.querySelector('#email');
      const confirmEmailInput = document.querySelector('#confirm-email');
      const usernameInput = document.querySelector('#username');
      const passwordInput = document.querySelector('#password');

      form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Get the values from the form
      const email = emailInput.value;
      const confirmEmail = confirmEmailInput.value;
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Checking data
      let errors = [];
      if (email !== confirmEmail) {
      errors.push('Podane adresy się różnią');
      }
      if (!/^[A-Za-z0-9]+$/.test(username)) {
      errors.push('Nazwa użytkownika moża zawierać tylko litery lub cyfry');
      }
      if (password.length < 6) {
      errors.push('Hasło musi mieć min. 6 znaków');
      }
      // Get data from localStorage
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      if (registeredUsers.some(user => user.email === email)) {
      errors.push('Podany e-mail już istnieje')
      }

      if (registeredUsers.some(user => user.username === username)) {
      errors.push('Nazwa użytkownika juz istnieje w systemie')
      }

      if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
      }
      // Save new username
      registeredUsers.push({ username, password, email });
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

      sessionStorage.setItem("username", username);

      window.location.href = '../LoggedPage/index.html';
      });

      const loginButton = document.querySelector('.login-button');
      loginButton.addEventListener('click', (event) => {
      event.preventDefault();

      window.location.href = '../Loginpage/login.html';
      });


