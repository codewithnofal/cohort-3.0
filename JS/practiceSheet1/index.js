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

function studentAverage() {
  let marks = [80, 90, 70, 85, 95];
  let average = marks.reduce((acc, val) => acc + val, 0) / marks.length;
  console.log(average);
}
// studentAverage();

// Question 9 — Even Numbers Finder.

function evenNumberFinder() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = numbers.filter((n) => n % 2 === 0);
  console.log(evenNumbers);
}
// evenNumberFinder()

// Question 10 — Product Search

function productSearch() {
  let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
  let index = products.indexOf("Keyboard");
  console.log(index);
}
// productSearch();

// Question 11 — Total Revenue.

function totalRevenue() {
  let sales = [500, 700, 1000, 300];
  let totalRev = sales.reduce((acc, val) => acc + val, 0);
  console.log(totalRev);
}
// totalRevenue();

// Question 12 — Uppercase Usernames.

function uppercaseUsername() {
  let users = ["ritik", "aman", "priya"];

  let upperCaseUser = users.map((u) => u.toUpperCase());
  console.log(upperCaseUser);
}
// uppercaseUsername();

// Question 13 — Find First Adult

function findFirstAdult() {
  let ages = [12, 15, 17, 19, 22];

  let firstAge = ages.find((a) => a >= 18);
  console.log(firstAge);
}
// findFirstAdult();

// Question 14 — Positive Number Check.

function positiveNumberCheck() {
  let nums = [5, 8, 10, 3];
  let positiveNum = nums.every((n) => n > 0);
  console.log(positiveNum);
}
// positiveNumberCheck();

// Question 15 — Most Frequent Number.

function mostFrequentNum() {
  let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
  let count = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
  }
  console.log(count);
}
// mostFrequentNum();

// Question 16 — Second Largest Number.

function seconLargestNum() {
  let nums = [10, 50, 20, 80, 40];
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secLargest = largest;
      largest = nums[i];
    } else if (nums[i] > secLargest) {
      secLargest = nums[i];
    }
  }
  console.log(secLargest);
}
// seconLargestNum();

// Question 17 — Remove Duplicates

function removeDuplicates() {
  let ids = [1, 2, 2, 3, 4, 4, 5, 5];

  let x = 0;

  for (let i = 0; i < ids.length; i++) {
    if (ids[i] > ids[x]) {
      x++;
      ids[x] = ids[i];
    }
  }
  let newArr = ids.slice(0, x + 1);
  console.log(newArr);
}
// removeDuplicates();

// Question 18 — Longest Word.

function longestWord() {
  let words = ["JavaScript", "HTML", "CSS", "Programming"];
  let longestW = 0;
  let longestword;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestW) {
      longestW = words[i].length;
      longestword = words[i];
    }
  }
  console.log(longestword);
  // console.log(longestW);
}
// longestWord();

// Question 19 — Rotate Array Right.

function rotateArrarRight() {
  let nums = [1, 2, 3, 4, 5];
  nums.pop();
  nums.unshift(5);
  console.log(nums);
}
// rotateArrarRight();

// Question 20 — Best Selling Product.

function bestSellingProducts() {
  let sales = ["Mouse", "Keyboard", "Mouse", "Laptop", "Mouse", "Keyboard"];
  let count = {};

  for (let i = 0; i < sales.length; i++) {
    let word = sales[i];
    if (count[word]) {
      count[word] = count[word] + 1;
    } else {
      count[word] = 1;
    }
  }
  let maxCount = 0;
  let pName;
  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      pName = key;
    }
  }
  console.log(pName);
}
// bestSellingProducts();

// *******************************************  Part 2: Objects (20 Questions)  ***********************************************

// Question 1 — Access User Name.

function accessUserName() {
  let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal",
  };

  console.log(user.name);
}
// accessUserName();

// Question 2 — Update User Age.

function updateUserAge() {
  let user = {
    name: "Ritik",
    age: 21,
  };

  user.age = 22;
  console.log(user);
}
// updateUserAge();

// Question 3 — Add Country.

function addCountry() {
  let user = {
    name: "Ritik",
    city: "Bhopal",
  };

  user.country = "India";
  console.log(user);
}
// addCountry();

// Question 4 — Delete Property.

function deletePassword() {
  let user = {
    name: "Ritik",
    age: 21,
    password: "12345",
  };

  delete user.password;

  console.log(user);
}
// deletePassword();

// Question 5 — Check Property Exists.

function propertyExist() {
  let product = {
    name: "Laptop",
    price: 60000,
  };
}
// propertyExist();

// Question 6 — Print All Keys

function printAllKeys() {
  let car = {
    brand: "BMW",
    model: "X5",
    year: 2025,
  };

  console.log(Object.keys(car));
}
// printAllKeys();

// Question 7 — Print All Values.

function printAllValues() {
  let car = {
    brand: "BMW",
    model: "X5",
    year: 2025,
  };

  console.log(Object.values(car));
}
// printAllValues();

// Question 8 — Print User Information Dynamically.

function printUserInfo() {
  let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal",
  };

  Object.entries(user).forEach(([key, val]) => {
    console.log(`${key} : ${val}`);
  });
}
// printUserInfo();

// Question 9 — Employee Salary Increase.

function employeeSalaryIncrease() {
  let employee = {
    name: "Aman",
    salary: 50000,
  };

  employee.salary = employee.salary + (employee.salary * 10) / 100;
  console.log(employee);
}
// employeeSalaryIncrease();

// Question 10 — Nested Object Access.

function nestedObject() {
  let user = {
    name: "Ritik",
    address: {
      city: "Bhopal",
      state: "MP",
    },
  };

  console.log(user.address.city);
}
// nestedObject();

// Question 11 — Object Destructuring.

function objectDestructuring() {
  let student = {
    name: "Priya",
    age: 20,
    course: "BCA",
  };

  let { name, age } = student;
  console.log(name, age);
}
// objectDestructuring();

// Question 12 — Rename During Destructuring.

function renameDestructuring() {
  let student = {
    name: "Priya",
    age: 20,
  };

  let { name: studentName, age: studentAge } = student;
  console.log(studentName, studentAge);
}
// renameDestructuring();

// Question 13 — Merge User and Address.

function mergeObjects() {
  let user = {
    name: "Ritik",
    age: 21,
  };
  let address = {
    city: "Bhopal",
    state: "MP",
  };

  user = { ...user, ...address };
  console.log(user);
}
// mergeObjects();

// Question 14 — Count Object Properties.

function countObjectProperties() {
  let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal",
    country: "India",
  };

  let length = Object.keys(user).length;
  console.log(length);
}
// countObjectProperties();

// Question 15 — Highest Paid Employee.

function highestPaidEmployee() {
  let employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000,
  };

  let highestSalary = 0;
  let empName;
  for (let key in employees) {
    if (employees[key] > highestSalary) {
      highestSalary = employees[key];
      empName = key;
    }
  }
  console.log(empName);
}
// highestPaidEmployee();

// Question 16 — Most Used Programming Language.

function mostUsedProgramingLanguage() {
  let votes = {
    JavaScript: 25,
    Python: 30,
    Java: 15,
    Cpp: 10,
  };
  let highest = 0;
  let mostUsedLang;

  for (let key in votes) {
    if (votes[key] > highest) {
      highest = votes[key];
      mostUsedLang = key;
    }
  }
  console.log(mostUsedLang);
}
// mostUsedProgramingLanguage();

// Question 17 — Reverse Key Value.

function reverceKeyValue() {
  let countries = {
    India: "Delhi",
    Japan: "Tokyo",
    France: "Paris",
  };

  let obj = {};

  Object.entries(countries).forEach(([key, val]) => {
    [key, val] = [val, key];
    obj[key] = val;
  });
  console.log(obj);
}
// reverceKeyValue();

// Question 18 — Student Marks Summary.

function studentMarksSummary() {
  let marks = {
    math: 90,
    science: 80,
    english: 85,
  };
  let total = Object.values(marks).reduce((acc, val) => acc + val, 0);
  console.log(total);
}
// studentMarksSummary();

// Question 19 — Find Missing Property.

function FindMissingProperty() {
  let user = {
    name: "Ritik",
    age: 21,
  };

  if (!("email" in user)) {
    user.email = "Not provided";
  }

  console.log(user);
}
// FindMissingProperty();

// Question 20 — Product Inventory Analyzer.

function productInventoryAnalyzer() {
  let inventory = {
    mouse: 25,
    keyboard: 10,
    monitor: 5,
    laptop: 2,
  };

  function totalStock(inventory) {
    return Object.values(inventory).reduce((acc, val) => acc + val, 0);
  }
  let total = totalStock(inventory);
  console.log(`Total items in stock : ${total}`);

  function productWithHighestStock(inventory) {
    let highest = 0;
    let product;

    for (let key in inventory) {
      if (inventory[key] > highest) {
        highest = inventory[key];
        product = key;
      }
    }
    return [product, highest];
  }
  let [product, highest] = productWithHighestStock(inventory);
  console.log(`Product with highest stock is ${product} : ${highest}`);

  function productWithLowestestStock(inventory) {
    let lowest = Infinity;
    let productName;

    for (let key in inventory) {
      if (inventory[key] < lowest) {
        lowest = inventory[key];
        productName = key;
      }
    }
    return [lowest, productName];
  }
  let [lowest, productName] = productWithLowestestStock(inventory);
  console.log(`Product with lowest stock is ${productName} : ${lowest} `);
}
// productInventoryAnalyzer();

// *******************************************  Part 3: Functions (20 Questions)  ***********************************************

// Question 1 — Greeting Function.

function greet(name) {
  console.log("Hello", name);
}
// greet("Nofal");

// Question 2 — Add Two Numbers.

function add(a, b) {
  console.log(a + b);
}
// add(10, 20);

// Question 3 — Find Square.

function square(num) {
  console.log(num * num);
}
// square(5)

// Question 4 — Check Even Number.

function isEven(num) {
  return num % 2 === 0 ? true : false;
}
// let ans = isEven(8);
// console.log(ans);

// Question 5 — Default Username.

function greet(name = "guest") {
  console.log("hello", name);
}
// greet()

// Question 6 — Celsius to Fahrenheit.

function converrtTemp(Celsius) {
  console.log(Celsius * 9.5 + 32);
}
// converrtTemp(32);

// Question 7 — Arrow Function Practice.

let multiply = (a, b) => {
  console.log(a * b);
};
// multiply(2,3)

// Question 8 — Discount Calculator.

function calculateDiscount(price) {
  let Discount = price - (price * 10) / 100;
  console.log(Discount);
}
// calculateDiscount(500);

// Question 9 — Largest of Three Numbers.

function findLargest(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
// findLargest(10, 50, 20);

// Question 10 — Reverse String.

function reverseString(str) {
  str = str.split("");
  let half = str.length / 2;
  for (let i = 0; i < half; i++) {
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str.join("");
}
let ans = reverseString("hello");
// console.log(ans);

// Question 11 — Count Vowels.

function countVowels(str) {
  str = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}
// countVowels("javascript");

// Question 12 — Generate Username.

function generateUsername(name) {
  let userName = name.toLowerCase().split(" ").join("_");
  console.log(userName);
}
// generateUsername("Nofal Kachhot")

// Question 13 — Dynamic Sum Function.

function sum(...numbers) {
  let total = numbers.reduce((acc, val) => acc + val, 0);
  console.log(total);
}
// sum(1,2,3,4)

// Question 14 — Login Validation.

function login(username, password) {
  if (username === "admin" && password === 1234) {
    console.log("Login Successful");
  } else {
    console.log("Invalid Credentials");
  }
}
// login("admin", 1234);

// Question 15 — Factorial Function.

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}
// factorial(5);

// Question 16 — Palindrome Checker.

function isPalindrome(str) {
  let reversedString = str.split("").reverse().join("");
  if (str == reversedString) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// isPalindrome("madam");

// Question 17 — Password Strength Checker.

function checkPassword(password) {
  if (password.length >= 8 && /\d/.test(password)) {
    console.log("Strong");
  } else {
    console.log("Weak");
  }
}
// checkPassword("Nofalddd1")

// Question 18 — Function Returning Function.

function makeMultiplier(multiplier) {
  return function (num) {
    return num * 2;
  };
}
let double = makeMultiplier(2);
// console.log(double(10))

// Question 19 — Callback Function.

function welcomeUser(name) {
  console.log("welcome", name);
}

function processUser(name, callback) {
  console.log("processing user... ");
  callback(name);
}
// processUser("Nofal", welcomeUser);

// Question 20 — Shopping Bill Generator.

// let products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1000 },
//   { name: "Monitor", price: 10000 },
// ];

function generateBill(items) {
  let total = items.reduce((acc, val) => acc + val.price, 0);
  console.log(`Total : ${total}`);
}
// generateBill(products);

// *******************************************  Part 4: Arrays + Objects + Functions (20Questions)  ***************************************

// Question 1 — Find Adult Users.

// let users = [
//   { name: "Ritik", age: 20 },
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 25 },
// ];

function getAdults(users) {
  return users.filter((u) => u.age >= 18);
}
// let adultUser = getAdults(users);
// console.log(adultUser)

// Question 2 — Product Names Extractor.

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
// ];

function getProductNames(products) {
  return products.map((p) => p.name);
}
// let pName = getProductNames(products);
// console.log(pName)

// Question 3 — Find User By Name.

// let users = [{ name: "Ritik" }, { name: "Aman" }, { name: "Priya" }];

function findUser(users, username) {
  return users.find((u, i) => u.name == username);
}
// let user = findUser(users, "Aman");
// console.log(user);

// Question 4 — Total Marks.

// let students = [
//   { name: "Ritik", marks: 80 },
//   { name: "Aman", marks: 90 },
//   { name: "Priya", marks: 70 },
// ];

function getTotalMarks(students) {
  return students.reduce((acc, val) => acc + val.marks, 0);
}
// let total = getTotalMarks(students);
// console.log(total);

// Question 5 — Available Products.

// let products = [
//   { name: "Mouse", stock: 10 },
//   { name: "Keyboard", stock: 0 },
//   { name: "Monitor", stock: 5 },
// ];

function getAvlProducts(products) {
  return products.filter((p) => p.stock > 0);
}
// let avlProd = getAvlProducts(products);
// console.log(avlProd)

// Question 6 — Add New Student.

// let students = ["Ritik", "Aman", "Priya"];
function addStudent(students, student) {
  students.push(student);
  console.log(students);
}
// addStudent(students, "Nofal");

// Question 7 — Count Premium Products

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 500 },
];

function findPremiumProd(products) {
  let premiumPrd = products.filter((p) => p.price > 10000).length;
  console.log(premiumPrd);
}
// findPremiumProd(products)

// Question 8 — Shopping Cart Total.

// let cart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 },
// ];

function getCartTotal(cart) {
  return cart.reduce((acc, val) => {
    return (acc += val.price * val.qty);
  }, 0);
}
// let total = getCartTotal(cart);
// console.log(total)

// Question 9 — Student Average Generator.

// let students = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [70, 75, 80] },
// ];

function getAverageMarks(students) {
  function average(marks) {
    return marks.reduce((acc, val) => acc + val, 0) / marks.length;
  }

  let studentMarks = students.map((s) => {
    return average(s.marks);
  });
  console.log(studentMarks);
}
// getAverageMarks(students)

// Question 10 — Inventory Search.

// let inventory = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Mouse" },
//   { id: 3, name: "Monitor" },
// ];

function findProductById(id) {
  return inventory.find((i) => i.id === id);
}
// let inv = findProductById(2)
// console.log(inv)

// Question 11 — Usernames Generator.

// let users = [{ name: "Ritik Rajput" }, { name: "Aman Gupta" }];

function usernameGenerator(users) {
  return users.map((u) => {
    return u.name.toLowerCase().split(" ").join("_");
  });
}
// let userName = usernameGenerator(users);
// console.log(userName)

// Question 12 — Highest Scoring Student.

// let students = [
//   { name: "Ritik", marks: 85 },
//   { name: "Aman", marks: 95 },
//   { name: "Priya", marks: 75 },
// ];

function highestScoringStudents(students) {
  let highest = 0;
  let name;
  for (let key in students) {
    if (students[key].marks > highest) {
      highest = students[key].marks;
      name = students[key];
    }
  }
  console.log(name);
}
// highestScoringStudents(students)

// Question 13 — Update Product Stock.

// let products2 = [
//   { id: 1, name: "Mouse", stock: 10 },
//   { id: 2, name: "Keyboard", stock: 0 },
//   { id: 3, name: "Monitor", stock: 5 },
// ];

function updateStock(id, quantity) {
  let prd = products2.find((p) => p.id === id);
  prd.stock = quantity;
  console.log(products2);
}
// updateStock(2, 6);

// Question 14 — Sort Students by Marks.

let students = [
  { name: "A", marks: 70 },
  { name: "B", marks: 95 },
  { name: "C", marks: 80 },
];

function sortStudents(students){
   students = students.sort((a,b)=> b.marks - a.marks)
    console.log(students)
}
sortStudents(students)
