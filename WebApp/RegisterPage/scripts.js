      const form = document.querySelector('#register-form');
      const emailInput = document.querySelector('#email');
      const confirmEmailInput = document.querySelector('#confirm-email');
      const usernameInput = document.querySelector('#username');
      const passwordInput = document.querySelector('#password');

      form.addEventListener('submit', (event) => {
      event.preventDefault();

      // pobiera wartości z formularza
      const email = emailInput.value;
      const confirmEmail = confirmEmailInput.value;
      const username = usernameInput.value;
      const password = passwordInput.value;

      // sprawdzanie danych 
      let errors = [];
      if (email !== confirmEmail) {
      errors.push('Emails do not match');
      }
      if (!/^[A-Za-z0-9]+$/.test(username)) {
      errors.push('Username can only contain letters and numbers');
      }
      if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
      }
      // pobiera dane zarejestrowanych użytkowników z przeglądarki
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
      // sprawdza czy istnieje już taki email
      if (registeredUsers.some(user => user.email === email)) {
      errors.push('This email already exist')
      }
      // sprawdza czy istnieje już taka nazwa użytkownika
      if (registeredUsers.some(user => user.username === username)) {
      errors.push('This username already exist')
      }
      // jeśli są błędy, wyświetl je
      if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
      }
      // zapisuje nowego użytkownika do zarejestrowanych użytkowników
      registeredUsers.push({ username, password, email });
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      //zapisuje username w sesji
      sessionStorage.setItem("username", username);
      // przekierowuje na stronę historii transakcji
      window.location.href = '../LoggedPage/index.html';
      });

      const loginButton = document.querySelector('.login-button');
      loginButton.addEventListener('click', (event) => {
      event.preventDefault();
      // przekieruj do widoku logowania
      window.location.href = '../Loginpage/login.html';
      });


