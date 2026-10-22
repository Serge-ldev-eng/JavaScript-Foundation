
const appName = "SpendWise";
let budget = 50000;
let expenseName = "Lunch";
let expenseAmount = 500;

budget = Number(prompt("Enter your budget:"));
let expense = Number(prompt("Enter your expense:"));

let remaining = budget - expense;

function calculateBalance(budget, expense){
  return budget - expense;
}

function calculateWeeklyBudget(monthlyBudget){
  return monthlyBudget / 4;
}

let balance = calculateBalance(budget, expense);
let weeklyBudget = calculateWeeklyBudget(budget);

console.log("Remaining Balance:", balance);
console.log("Weekly Budget:", weeklyBudget);
console.log("Balance with ||:", remaining);
