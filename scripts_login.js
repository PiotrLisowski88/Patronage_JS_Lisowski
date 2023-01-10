// plik: main.js

const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    // pokazuje błąd jeśli któreś z pól jest puste
    return;
  }

  // pobiera dane zarejestrowanych użytkowników z przeglądarki
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // sprawdza czy nazwa użytkownika i hasło są poprawne
  const user = registeredUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    // pokazuje błąd jeśli nie znaleziono użytkownika o podanej nazwie i haśle
    return;
  }

  // zapisuje nazwę użytkownika w sesji
  sessionStorage.setItem("username", username);

  // przekierowuje na stronę historii transakcji
  window.location.href = "/transactions.html";
});
