// Initialize balance
let balance = 1000;

// Function to update the balance display
function updateBalance() {
    document.getElementById("balance").textContent = `$${balance}`;
}

// Function to handle checking balance
document.getElementById("checkBalance").addEventListener("click", function() {
    alert(`Your balance is: $${balance}`);
});

// Function to handle withdrawing money
document.getElementById("withdraw").addEventListener("click", function() {
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));

    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById("transactionArea").innerHTML += `<p>Withdrawn: $${amount}</p>`;
    } else {
        alert("Invalid amount or insufficient balance.");
    }
});

// Function to handle depositing money
document.getElementById("deposit").addEventListener("click", function() {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById("transactionArea").innerHTML += `<p>Deposited: $${amount}</p>`;
    } else {
        alert("Invalid amount.");
    }
});

// Initial balance update
updateBalance();
