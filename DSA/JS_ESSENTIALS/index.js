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

