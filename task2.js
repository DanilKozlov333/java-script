class ShoppingCart {
    constructor() {
        this.products = [];
}

    addProduct(name, price) {
        this.products.push({ name, price });
        console.log(`Товар "${name}" добавлен`);
}

    removeProduct(name) {
         const index = this.products.findIndex(p => p.name === name);
         if (index !== -1) {
             this.products.splice(index, 1);
             console.log(`Товар "${name}" удалён`);
    } else {
             console.log(`Товар "${name}" не найден`);
    }
}

    getTotal() {
        let total = 0;
        for (let product of this.products) {
             total += product.price;
        }
        return total;
    }

    showProducts() {
        if (this.products.length === 0) {
            console.log("Корзина пуста");
             return;
        }
        console.log("Товары в корзине:");
        for (let product of this.products) {
            console.log(`- ${product.name}: ${product.price} грн`);
        }
        console.log(`Общая стоимость: ${this.getTotal()} грн`);
    }
}

const cart = new ShoppingCart();
cart.addProduct("Ноутбук", 25000);
cart.addProduct("Мышка", 500);
cart.addProduct("Клавиатура", 1200);
cart.showProducts();
cart.removeProduct("Мышка");
cart.showProducts();
