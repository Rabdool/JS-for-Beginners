// ARRAYS

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // apple
fruits.push("orange");  // Add to end
fruits.pop();           // Remove last

fruits.forEach(fruit => console.log(fruit));

let uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercased); // ["APPLE", "BANANA", "CHERRY"]
