const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map(function(value, index) {
    return value * index;
});

console.log(newArray);