// Question 1 — Find Expensive Products.

function findExpeniveProducts() {
  let prices = [100, 250, 500, 150, 700];
  let finalPrice = prices.filter((p) => p > 300);
  console.log(finalPrice);
}
// findExpeniveProducts();

// Question 2 — Last Student in Class.

function lastStudentInClass() {
  let students = ["Aman", "Ritik", "Priya", "Rahul"];
  let lastStudent = students[students.length - 1];
  console.log(lastStudent)
}
lastStudentInClass();
