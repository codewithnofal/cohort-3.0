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
  console.log(total);
}
// productDataProcesor();

// 7. Debounce Utility from Scratch.
function search() {
  console.log("searching");
}

function debounce(fnc, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fnc();
    }, delay);
  };
}
// let debounceSearch = debounce(search, 1000);
// debounceSearch()

// 8. Sequential Task Runner.

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
  console.log(total);
}
// productDataProcesor();

// 7. Debounce Utility from Scratch.
function search() {
  console.log("searching");
}

function debounce(fnc, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fnc();
    }, delay);
  };
}
// let debounceSearch = debounce(search, 1000);
// debounceSearch()

// 8. Sequential Task Runner.

function step1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 1 Done");
      res();
    }, 2000);
  });
}
function step2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 2 Done");
      res();
    }, 1000);
  });
}
function step3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 3 Done");
      res();
    }, 3000);
  });
}
// async function sequentialTaskRunner() {
//   await step1();
//   await step2();
//   await step3();
// }
// sequentialTaskRunner();

// 9. API Data Cleaner.

async function apiDataCleaner() {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await res.json();

    let newData = data.map((d) => {
      return {
        id: d.id,
        name: d.name,
      };
    });
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
}
// apiDataCleaner();

// 10. Mini Event Emitter.

function welcome() {
  console.log("Welcome User");
}

function sendEmail() {
  console.log("Email Sent");
}
function isLoggedin() {
  console.log("Login Successfully!");
}

const emitter = {
  events: {},

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  },
  emit(eventName) {
    const callback = this.events[eventName];

    if (!callback) return;

    callback.forEach((cb) => cb());
  },
  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      (cb) => cb !== callback,
    );
  },
};

(emitter.on("login", welcome),
  emitter.on("login", sendEmail),
  emitter.on("login", isLoggedin));

emitter.emit("login");

emitter.off("login", sendEmail);

emitter.emit("login");
