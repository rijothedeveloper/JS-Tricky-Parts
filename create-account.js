function createAccount(pin, amount = 0) {
  this.pin = pin;
  let balance = amount;
  return {
    checkBalance: (pinNo) => {
      if (pinNo === pin) return "$" + balance;
      else return "Invalid PIN.";
    },
    deposit: (pinNo, amount) => {
      if (pinNo === pin) {
        balance += amount;
        return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
      } else return "Invalid PIN.";
    },
    withdraw: (pinNo, amount) => {
      if (pinNo === pin) {
        if (balance - amount < 0) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
      } else return "Invalid PIN.";
    },
    changePin: (pinNo, newPin) => {
      if (pinNo === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
