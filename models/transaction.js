class Transaction {
  constructor(id, userId, amount, date, categoryId) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.date = date;
    this.categoryId = categoryId;
  }
}

module.exports = Transaction;
