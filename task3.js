class Wallet {
    #balance = 0;
    #transactions = [];

    addMoney(amount) {
       if (amount <= 0) {
           console.log("Сумма должна быть больше 0");
           return;
    }
    this.#balance += amount;
    this.#transactions.push(`Пополнение: +${amount}`);
    console.log(`Пополнено на ${amount}. Баланс: ${this.#balance}`);
}

    spendMoney(amount) {
        if (amount <= 0) {
            console.log("Сумма должна быть больше 0");
            return;
        }
        if (amount > this.#balance) {
            console.log("Недостаточно средств");
            return;
        }
        this.#balance -= amount;
        this.#transactions.push(`Расход: -${amount}`);
        console.log(`Потрачено ${amount}. Баланс: ${this.#balance}`);
}

    getBalance() {
        return this.#balance;
    }

    showTransactions() {
        console.log("История операций:");
        for (let t of this.#transactions) {
             console.log("- " + t);
        }
    }
}

const wallet = new Wallet();
wallet.addMoney(1000);
wallet.spendMoney(300);
wallet.spendMoney(800); // недостаточно
console.log("Текущий баланс:", wallet.getBalance());
wallet.showTransactions();
