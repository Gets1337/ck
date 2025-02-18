class Budget {
  constructor(id, userId, amount, startDate, endDate, categoryId) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.startDate = startDate;
    this.endDate = endDate;
    this.categoryId = categoryId;
  }
}

module.exports = Budget;
