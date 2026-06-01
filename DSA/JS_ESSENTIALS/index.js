// ------------------------------here is a some programs for the js -------------------------------------

// 1. sum of two numbers.

function sumOftwo() {
  let a = 10;
  let b = 20;

  let c = a + b;
  console.log(c);
}
// sumOftwo()

// 2.Compound interest calculation.

function compoundIntrest() {
  let p = 10000;
  let r = 10;
  let t = 2;

  let amount = p * (1 + r / 100) ** t;
  let ci = amount - p;
  console.log(ci.toFixed(2));
}
// compoundIntrest()

// 3. swap two numbers.

function swapTwoNum() {
  let a = 10;
  let b = 20;

  let temp = a;
  a = b;
  b = temp;

  console.log(a, b);
}

// swapTwoNum()

// 4. calculate area of triangle using herons formula.

function areaOfTriangle() {
  let a = 3,
    b = 4,
    c = 5;

  let s = (a + b + c) / 2;

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}

// areaOfTriangle()

// 5. Calculate circumference and area of circle

function areaOfCircle() {
  let r = 7;
  let circumference = 2 * Math.PI * r;
  let area = Math.PI * r * r;

  console.log(Number(circumference.toFixed(2)));
  console.log(Number(area.toFixed(2)));
}

// areaOfCircle()

//6. find the greatest of two numbers.

function findTheGreatestOfTwo() {
  let a = 45,
    b = 45;
  if (a === b) {
    return "both value are same";
  }
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

// let ans = findTheGreatestOfTwo();
// console.log(ans)

// 7. check if number is even or odd.

function evenOrOdd() {
  let n = 6;
  n % 2 === 0 ? console.log("even") : console.log("odd");
}

// evenOrOdd()

// 8. check if user is valid voter.

function validVoterCheck() {
  let age = 12;

  age >= 18 ? console.log("valid voter") : console.log("not valid voter");
}

// validVoterCheck()

// 9. check if a year is leap year.
function leapYearCheck() {
  let year = 1900;

  if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log("not a leap year !!");
  }
}

// leapYearCheck();

// 10. calculate final amount after discount.

function calculateFinalAmount() {
  let amount = 9200;
  let disc = 0;

  if (amount > 0 && amount <= 5000) {
    disc = 0;
  } else if (amount >= 5001 && amount <= 7000) {
    disc = 5;
  } else if (amount >= 7001 && amount <= 9000) {
    disc = 10;
  } else {
    disc = 20;
  }
  return amount - (amount * disc) / 100;
}

// let ans = calculateFinalAmount()
// console.log(ans)

// 11. calculate electricity bill based on unit consumed.

function elecBillCheck() {
  let units = 210;
  let elecBill = 0;

  if (units > 0 && units <= 100) {
    elecBill = units * 4.2;
  } else if (units >= 101 && units <= 200) {
    elecBill = 100 * 4.2 + (units - 100) * 6;
  } else if (units >= 201 && units <= 400) {
    elecBill = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
  } else {
    elecBill = 100 * 4.2 + 100 * 6 + (200 * 8)(units - 400) * 13;
  }
  return elecBill;
}

// let ans = elecBillCheck();
// console.log(ans);

// 12. find the greatest number among three numbers.

function findGreatestOfthreeNumbers() {
  let a = 4423,
    b = 624,
    c = 74;

  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// let ans = findGreatestOfthreeNumbers();
// console.log(ans);



