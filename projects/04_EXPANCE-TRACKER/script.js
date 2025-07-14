document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expanceNameInput = document.getElementById("expance-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expanceList = document.getElementById("expance-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expanses = JSON.parse(localStorage.getItem("expenses")) || [];

  renderExpences();
  updateTotal();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = expanceNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (!name) {
      alert("Enter a valid name");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      alert("Enter a positive amount");
      return;
    }

    const newExpance = {
      id: Date.now(),
      name: name,
      amount: amount,
    };

    expanses.push(newExpance);
    saveExpensesToLocal();
    updateTotal();
    renderExpences();

    expanceNameInput.value = "";
    expenseAmountInput.value = "";
  });

  function renderExpences() {
    expanceList.innerHTML = "";
    expanses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} : ₹${expense.amount.toFixed(2)}
        <button data-id="${expense.id}">Delete</button>
      `;
      expanceList.appendChild(li);
    });
  }

  function calculateTotal() {
    return expanses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expanses));
  }

  function updateTotal() {
    const total = calculateTotal();
    totalAmountDisplay.textContent = total.toFixed(2);
  }

  expanceList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expanseId = parseInt(e.target.getAttribute("data-id"));
      expanses = expanses.filter((expance) => expance.id !== expanseId);
      saveExpensesToLocal();
      renderExpences();
      updateTotal();
    }
  });
});
