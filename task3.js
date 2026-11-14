const car1 = {
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020
};

const car2 = {
    brand: "Mercedec",
    model: "Benz",
    owner: "Андрій"
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);