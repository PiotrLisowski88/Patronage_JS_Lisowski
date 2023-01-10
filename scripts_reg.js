const form = document.querySelector('#register-form');
const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirm-email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // pobierz wartości z pól formularza
  const email = emailInput.value;
  const confirmEmail = confirmEmailInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  // sprawdź poprawność danych
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

    // jeśli są błędy, wyświetl je
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    // prześlij dane do serwera za pomocą fetch API
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // jeśli rejestracja przebiegła pomyślnie, przekieruj do widoku zalogowanego użytkownika
          window.location.href = '/logged-in.html';
        } else {
          // jeśli wystąpił błąd, wyświetl odpowiedni komunikat
          return response.text();
        }
      })
      .then((errorMessage) => {
        alert(errorMessage);
      });
  });

  const loginButton = document.querySelector('.login-button');
  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    // przekieruj do widoku logowania
    window.location.href = 'login.html';
  });

