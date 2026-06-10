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
    if(vowels.includes(str[i])){
      count++
    }
  }
  console.log(count);
}
// countVowels("javascript");
