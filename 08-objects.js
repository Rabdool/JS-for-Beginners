// OBJECTS

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  greet() {
    return `Hi, I'm ${this.firstName}`;
  }
};

console.log(person.firstName); // John
console.log(person.greet());   // Hi, I'm John

// Add new property
person.job = "Developer";
console.log(person);
