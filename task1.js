const number = 5;

console.log("Таблица умножения (цикл for):");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

console.log("-------------------------");

console.log("Таблица умножения (цикл while):");

let i = 1;
while (i <= 10) {
    console.log(number + " x " + i + " = " + (number * i));
    i = i + 1;
}