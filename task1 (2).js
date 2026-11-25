class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
}

deposit(amount) {
    if (amount <= 0) {
        console.log("Сумма пополнения должна быть больше 0");
        return;
    }
    this.balance += amount;
    console.log(`Пополнено на ${amount}. Новый баланс: ${this.balance}`);
}

withdraw(amount) {
    if (amount <= 0) {
        console.log("Сумма снятия должна быть больше 0");
        return;
    }
    if (amount > this.balance) {
        console.log("Недостаточно средств");
        return;
    }
    this.balance -= amount;
    console.log(`Снято ${amount}. Новый баланс: ${this.balance}`);
}

showBalance() {
console.log(`Владелец: ${this.owner}, Баланс: ${this.balance}`);
}
}

const account = new BankAccount("Данил", 1000);
account.showBalance();
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
account.deposit(-100); 
account.showBalance();