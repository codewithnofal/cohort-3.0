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
  console.log(lastStudent);
}
// lastStudentInClass();

// Question 3 — Add New Product.

function addProduct() {
  let products = ["Laptop", "Mouse", "Keyboard"];
  products.push("Monitor");
  console.log(products);
}
// addProduct();

// Question 4 — Remove Last Notification.

function removeNotification() {
  let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];
  notifications.pop();
  console.log(notifications);
}
// removeNotification();

// Question 5 — Check User Exists.

function checkUserexist() {
  let users = ["Aman", "Ritik", "Priya"];
  let isTrue = users.includes("Ritik");
  console.log(isTrue);
}
// checkUserexist();

// Question 6 — Convert Marks to Percentage.

function convertMarksToPersantage() {
  let marks = [80, 90, 70];
  let persantage = marks.map((m) => m + "%");
  console.log(persantage);
}
// convertMarksToPersantage();

// Question 7 — Count Products.

function countProducts() {
  let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];

  let products = cart.length;
  console.log(products);
}
// countProducts();

// Question 8 — Student Average.
