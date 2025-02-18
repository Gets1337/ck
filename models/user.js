class User {
  constructor(
    id,
    name,
    email,
    passwordHash,
    currency,
    transactions = [],
    budgets = [],
    goals = []
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.currency = currency;
    this.transactions = transactions;
    this.budgets = budgets;
    this.goals = goals;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  addBudget(budget) {
    this.budgets.push(budget);
  }

  addGoal(goal) {
    this.goals.push(goal);
  }
}

module.exports = User;
