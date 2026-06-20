// 1. Even or Odd Checker.

function checkEvenOdd() {
  let n = 9;
  return n % 2 === 0 ? "Even" : "odd";
}
// let ans = checkEvenOdd();
// console.log(ans);

// 2. Greeting Generator.

function greet(name, age) {
  return `Hello, ${name}! You are ${age} years old`;
}
// let ans = greet("Nofal", 22);
// console.log(ans);

// 3. Rectangle Area Calculator.

function areaOfRectangle(a, r) {
  let area = a * r;
  console.log(area);
}
// areaOfRectangle(10, 20);

// 4. Private Counter with Closures.

function privateVarwithClosures() {
  let count = 0;
  return function inner() {
    return count++;
  };
}
// let ans = privateVarwithClosures();
// console.log(ans())
// console.log(ans())
// console.log(ans())

// 5. Find the Largest Number.

function largestNum() {
  let arr = [1, 33, 55, 43, 354, 63, 324, 643, 255];
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
// largestNum();

// ****************************************************** MEDIUM LEVEL ***************************************************

// 6. Product Data Processor.

function productDataProcesor() {
  let product = [
    { name: "mouse", price: 4000, category: "electronics" },
    { name: "keyboard", price: 10000, category: "electronics" },
    { name: "chair", price: 12000, category: "furniture" },
    { name: "table", price: 21000, category: "furniture" },
    { name: "monitor", price: 18000, category: "electronics" },
  ];

  let pname = product.map((p) => p.name);
  console.log(pname);

  let filterP = product.filter((p) => p.category == "electronics");
  console.log(filterP);

  let total = product.reduce((acc, val) => acc + val.price, 0);
  console.log(total)
}
productDataProcesor();
