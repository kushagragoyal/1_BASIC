function addExp() {
    const amount = document.getElementById('expenseAmount').value;
    const value = document.getElementById('expenseValue').value;
    const type = document.getElementById('expenseType').value;

    const expense = {
      amount,
      value,
      type
    };

    const existingExpenses = JSON.parse(localStorage.getItem('expenses'));
    existingExpenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(existingExpenses))

    displayExpenses();
  }

  // Function to display the expenses list to the user
  function displayExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    const expenses = JSON.parse(localStorage.getItem('expenses'));

    expenses.forEach((expense, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${expense.amount}</span>
        <span>${expense.value}</span>
        <span>${expense.type}</span>
        <button onclick="editExpense(${index})">Edit</button>
        <button onclick="deleteExpense(${index})">Delete</button>
      `
      expensesList.appendChild(li);
    });
  }

  // Function to edit an expense
  function editExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (index >= 0 && index < expenses.length) {
      const expense = expenses[index];
      document.getElementById('expenseAmount').value = expense.amount;
      document.getElementById('expenseValue').value = expense.value;
      document.getElementById('expenseType').value = expense.type;

      // Remove the existing expense from the list
      expenses.splice(index, 1);
      // Save the updated expenses list back to local storage
      localStorage.setItem('expenses', JSON.stringify(expenses));

      // Update the expenses list displayed to the user
      displayExpenses();
    }
  }

  // Function to delete an expense
  function deleteExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    if (index >= 0 && index < expenses.length) {
      // Remove the expense from the list
      expenses.splice(index, 1);
      // Save the updated expenses list back to local storage
      localStorage.setItem('expenses', JSON.stringify(expenses));

      // Update the expenses list displayed to the user
      displayExpenses();
    }
  }

  // Display the expenses list when the page loads
  displayExpenses();
