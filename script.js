// 2. Store Application Data
let budget = 50000;
let expenses = 15000;
const userName = "Serge";

// 3. Collect User Input
let userBudgetInput = prompt("Enter your monthly budget:");
let userExpensesInput = prompt("Enter your total expenses:");

// Convert to numbers
let userBudget = Number(userBudgetInput);
let userExpenses = Number(userExpensesInput);

// Use default values if user cancels
if (!userBudget) userBudget = budget;
if (!userExpenses) userExpenses = expenses;

// 5. Create Reusable Functions
function calculateBalance(budgetAmount, expensesAmount) {
  return budgetAmount - expensesAmount;
}

function calculatePercentageSpent(budgetAmount, expensesAmount) {
  return (expensesAmount / budgetAmount) * 100;
}

function getSpendingStatus(balance) {
  if (balance > 0) return "You are within budget";
  if (balance === 0) return "Budget exactly used";
  return "Over budget!";
}

// 4. Perform Budget Calculations
let remainingBalance = calculateBalance(userBudget, userExpenses);
let percentSpent = calculatePercentageSpent(userBudget, userExpenses);
let status = getSpendingStatus(remainingBalance);

// 6. Display Results in console - clearly labeled
console.log("=== SpendWise Budget Report ===");
console.log("User:", userName);
console.log("Budget: $" + userBudget);
console.log("Expenses: $" + userExpenses);
console.log("Remaining Balance: $" + remainingBalance);
console.log("Percentage Spent: " + percentSpent.toFixed(2) + "%");
console.log("Status: " + status);
console.log("================================");
console.log("Static test: budget - expenses = " + (budget - expenses));
console.log("Function test: calculateBalance(40000, 12000) = " + calculateBalance(40000, 12000));
