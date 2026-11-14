const person = {
    firstName: "Христина",
    lastName: "Іванова",
    age: 22
};

person.email = "hristyna@example.com";

delete person.age;

console.log(person);