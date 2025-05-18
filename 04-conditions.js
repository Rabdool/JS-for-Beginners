// CONDITIONS

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

// Ternary operator
let isPassed = score >= 50 ? "Passed" : "Failed";
console.log(isPassed); // Passed
