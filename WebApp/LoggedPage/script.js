function logout() {
  // Clear session storage
  sessionStorage.clear();
  // Redirect to login page
  window.location.href = "../LoginPage/login.html";
}

let username = sessionStorage.getItem("username");
document.getElementById("username").innerHTML = username;


fetch("https://api.npoint.io/38edf0c5f3eb9ac768bd")
  .then(response => response.json())
  .then(data => {
    // Table content
    let transactionsList = document.getElementById("transactions-list");
    data.transactions.forEach(transaction => {
      let row = document.createElement("tr");
      let dateCell = document.createElement("td");
      dateCell.innerHTML = transaction.date;
      let typeCell = document.createElement("td");
      typeCell.innerHTML = `<img class="transaction-icon" src="icons/${transaction.type}.svg" alt="${data.transacationTypes[transaction.type]}">`;
      let descriptionCell = document.createElement("td");
      descriptionCell.innerHTML = transaction.description;
      let amountCell = document.createElement("td");
      amountCell.innerHTML = transaction.amount;
      let balanceCell = document.createElement("td");
      balanceCell.innerHTML = transaction.balance;
      row.appendChild(dateCell);
      row.appendChild(typeCell);
      row.appendChild(descriptionCell);
      row.appendChild(amountCell);
      row.appendChild(balanceCell);
      transactionsList.appendChild(row);
    });

    // Chart creation
    let chartsContainer = document.getElementById("charts");
    let chart = new Chart(chartsContainer, {
      type: 'line',
      data: {
          labels: data.transactions.map(transaction => transaction.date),
          datasets: [{
              label: 'Kwota transakcji',
              data: data.transactions.map(transaction => transaction.amount),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
  })
  .catch(error => console.error(error));
