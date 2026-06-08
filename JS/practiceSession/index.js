// 1. Find Expensive Products.

function findPrimiumProducts() {
  let prices = [100, 250, 500, 150, 700];

  let filteredPrice = prices.filter((price) => price > 300);
  console.log(filteredPrice);
}
// findPrimiumProducts();

// 2. Student Average.

function findTotalAndEverage() {
  let marks = [80, 90, 70, 85, 95];

  let total = marks.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  let average = total / marks.length;
  console.log(average);
  //   console.log(total);
}
// findTotalAndEverage();

// 3.

function mostFrequentCount() {
  let nums = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

  let count = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
  }
  // console.log(count);

  let frequency = 0;
  let mostFrequent;

  for (let key in count) {
    if (count[key] > frequency) {
      frequency = count[key];
      mostFrequent = key;
    }
  }
  console.log(mostFrequent);
}
// mostFrequentCount();

// 4. Update User Age.

function updateUSerAge() {
  let user = {
    name: "Nofal",
    age: 22,
  };
  user.age = 24;
  console.log(user);
}
// updateUSerAge()

// 5. Print User Information.

function printUserInformation() {
  let user = {
    name: "Ritik",
    age: 20,
    city: "Bhopal",
  };

  for (let key in user) {
    console.log(`${key} : ${user[key]}`);
  }
}
// printUserInformation();

// 6. Highest Paid Employee.

function highestPaidEmployee() {
  let employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000,
  };
  let highestPaidemp = 0;
  let name;
  for (let key in employees) {
    if (employees[key] > highestPaidemp) {
      highestPaidemp = employees[key];
      name = key;
    }
  }
  console.log(highestPaidemp);
  console.log(name);
}
// highestPaidEmployee();

// 7. Greeting Function.

function greet(name) {
  console.log("hello", name);
}
// greet("Nofal");

// 8. Discount Calculator

function calculateDiscount(price) {
  let Discount = (price * 10) / 100;
  let finalAmount = price - Discount;
  console.log(finalAmount);
}
// calculateDiscount(500);

// 9. Dynamic Sum Function

function dynamicSum(...numbers) {
  let sum = numbers.reduce((acc, val) => {
    return (acc += val);
  }, 0);
  console.log(sum);
}
// dynamicSum(1, 2, 3, 4, 5);

// 10. Find Adult Users.

let users = [
  { name: "Ritik", age: 20 },
  { name: "Aman", age: 16 },
  { name: "Priya", age: 25 },
];

function getAdults(users) {
  let adultUser = users.filter((user) => user.age >= 18);
  console.log(adultUser);
}
// getAdults(users);

// 11. Shopping Cart Total.

let cart = [
  { name: "Mouse", price: 500, qty: 2 },
  { name: "Keyboard", price: 1000, qty: 1 },
  { name: "Monitor", price: 10000, qty: 1 },
];

function getCartTotal(cart) {
  let total = cart.reduce((acc, val) => {
    return (acc += val.price * val.qty);
  }, 0);
  console.log(total);
}
// getCartTotal(cart)

// 12. Student Grade Report.

let students = [
  {
    name: "Ritik",
    marks: [80, 90, 85],
  },
  {
    name: "Aman",
    marks: [50, 40, 60],
  },
];

function generateReport(students) {

  
}
generateReport(students);
