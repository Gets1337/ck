class Goal {
  constructor(id, userId, targetAmount, currentAmount, targetDate) {
    this.id = id;
    this.userId = userId;
    this.targetAmount = targetAmount;
    this.currentAmount = currentAmount;
    this.targetDate = targetDate;
  }

  updateCurrentAmount(amount) {
    this.currentAmount += amount;
  }
}

module.exports = Goal;
