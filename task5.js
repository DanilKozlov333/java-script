const users = [
    { name: "Данило", email: "danylo@gmail.com", age: 19 },
    { name: "Артем", email: "artem@gmail.com", age: 24 },
    { name: "Яна", email: "yana@gmail.com", age: 23 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(name, email, age);
}
