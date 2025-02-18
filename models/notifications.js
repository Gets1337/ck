class Notification {
  constructor(id, userId, message, date) {
    this.id = id;
    this.userId = userId;
    this.message = message;
    this.date = date;
  }

  markAsRead() {
    this.read = true;
  }
}

module.exports = Notification;
