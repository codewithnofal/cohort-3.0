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
  console.log(pName)
}
// bestSellingProducts();


// *******************************************  Part 2: Objects (20 Questions)  *****************************************

