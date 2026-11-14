const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedList = [...numbersList];

sortedList.sort(function(a, b) {
    return a - b;
});

console.log("Исходный массив:", numbersList);
console.log("Отсортированный массив:", sortedList);