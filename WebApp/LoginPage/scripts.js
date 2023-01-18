const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-or-email");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from refreshing the page

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // checking if the fields are empty
  if (username === "" || password === "") {
    // showing an error if any of the fields are empty
    alert("Both fields are required!");
    return;
  }
  
  // getting the registered users data from browser
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  
  // check if the username or email and password match
  const user = registeredUsers.find((user) => (user.username === username || user.email === username) && user.password === password);
    
  if (!user) {
    // showing an error if no user is found with the given username and password
    alert("Incorrect username or password!");
    return;
  }
  
  // saving the username in the session
  sessionStorage.setItem("username", username);

  // add a new entry to the browser's history and update the current URL
  window.location.href = '../LoggedPage/index.html';
});