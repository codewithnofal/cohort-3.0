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

// *****************************************************  LOOPS QUESTIONS   *********************************************************

// 1. Print natural numbers from1 to n.

function print1ton() {
  let n = 10;
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// print1ton()

// 2. print natural numbers from n to 1.

function printnto1() {
  let n = 10;
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
// printnto1()

// 3. Sum up to n terms.

function sumUpToNterms() {
  let n = 5;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
// sumUpToNterms()

// 4. factorial of a number.

function factorialOfNumbers() {
  let n = 5;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}
// factorialOfNumbers();

// 5. print all factors of a number.

function printFactorsOfNum() {
  let n = 12;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  console.log(n);
}
// printFactorsOfNum()

// 6. sum of even and odd number in a range.(start to end )

function sumOfEvenAndOdd() {
  let start = 5;
  let end = 15;
  let sumOfEven = 0,
    sumOfOdd = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sumOfEven += i;
    } else {
      sumOfOdd += i;
    }
  }
  console.log("sum of even : " + sumOfEven);
  console.log("sum of odd : " + sumOfOdd);
}
// sumOfEvenAndOdd()

// 7. check if a number is prime.

function checkPrimeNum() {
  let n = 9;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log("prime number");
  } else {
    console.log("not prime");
  }
}
// checkPrimeNum();

// 8. calculate power of a number.

function calculatePower() {
  let power = 3;
  let n = 2;
  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= n;
  }
  console.log(result);
}
// calculatePower()

// 9. check if a number is a strong.

function checkStrongNum() {
  let n = 140;
  let sum = 0;
  let nCopy = n;

  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    let fact = 1;

    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }
    sum += fact;
  }

  if (nCopy == sum) {
    console.log(`${nCopy} is strong number`);
  } else {
    console.log(`${nCopy} is not strong number`);
  }
}

// checkStrongNum();

// 10. Reverse integer. (Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.)

function reverseInteger() {
  let n = 1234;
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  console.log(rev);
}

// reverseInteger()

// 11. sum of digits of a number.

function SumOfDigit() {
  let n = 12345;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    sum += rem;
  }
  console.log(sum);
}

// SumOfDigit();

// 12. check if a number is automorphic.

function checkNumIsAutomorphic() {
  let n = 7;
  let square = n * n;
  let nCopy = n;
  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  let divisor = 1;
  for (let i = 1; i <= count; i++) {
    divisor *= 10;
  }

  let digits = square % divisor;
  console.log(digits);

  if (digits == nCopy) {
    console.log(`${nCopy} is automorphic number`);
  } else {
    console.log(`${nCopy} is Not automorphic number`);
  }
}
// checkNumIsAutomorphic();

// 14. Harshad number check.

function checkHarshadNum() {
  let n = 19;
  let nCopy = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    sum += rem;
  }

  nCopy % sum === 0
    ? console.log("harshad number")
    : console.log("not harshad number");
}
// checkHarshadNum();

// 15. abundant number checker.

function checkAbundantNum() {
  let n = 12;
  let nCopy = n;
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum > nCopy) {
    console.log("abundunt");
  } else {
    console.log("not abundant");
  }
}
// checkAbundantNum()

// 16. finding prime factors of a numbers

function primeFactorsOfNum() {
  let n = 12;

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      console.log(i);
      n = n / i;
    }
  }
}
// primeFactorsOfNum();

// 17. armstrong number checker.

function checkArmstrongNum() {
  let n = 144;
  let count = 0;
  let temp = n;

  // count digits of n
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }

  temp = n;
  let sum = 0;

  while (temp > 0) {
    let digit = temp % 10;
    temp = Math.floor(temp / 10);
    sum += digit ** count;
  }
  sum === n
    ? console.log("Armstrong number")
    : console.log("not Armstrong number");
}
// checkArmstrongNum();

// 18. check if a number is a neon number.

function checkNeonNum() {
  let n = 12;
  let square = n * n;
  let sum = 0;

  while (square > 0) {
    let digits = square % 10;
    square = Math.floor(square / 10);
    sum += digits;
  }
  sum == n ? console.log("Neon number") : console.log("not neon number");
}
// checkNeonNum()

// *****************************************************  PATTERN PROGRAMING   *********************************************************

// 1. Right triangle - star pattern.

function rightTriangle() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " *";
    }
    console.log(row);
  }
}
// rightTriangle();

// 2. inverted right triangle -  star pattern.

function invertedRightTriangle() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j <= n; j++) {
      row += " *";
    }
    console.log(row);
  }
}
// invertedRightTriangle();

// 3. Mirrored right triangle - star pattern.

function mirroredRightTriangle() {
  let n = 5;

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1 + i; j <= n; j++) {
      row += "  ";
    }
    for (let k = 1; k <= i; k++) {
      row += "* ";
    }
    console.log(row);
  }
}
// mirroredRightTriangle();

// 4. Print an X- shape Pattern.

function xShapePattern() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// xShapePattern();

// 5. Print an V - shape Pattern.

function vShapePattern() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j < n * 2; j++) {
      if (i === j || i + j === n * 2 - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// vShapePattern();

// *****************************************************  ARRAYS QUESTIONS   *********************************************************

// 1. Calculates sum and mean of array elements.

function calcSumAndMeanOfArry() {
  let arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let mean = sum / arr.length;
  console.log("sum =", sum, "mean = ", mean);
}
// calcSumAndMeanOfArry();

// 2. Second Largest.

function secondLargrst() {
  let arr = [10, 36, 21, 0, 54, 27];

  let Largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Largest) {
      secondLargest = Largest;
      Largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}
// secondLargrst()

// 3. Count Negative Numbers in an Array.

function countNegativeNum() {
  let arr = [-1, 3, -2, 4, 6, 0, -4, -7];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
}
// countNegativeNum()

// 4. Find Smallest Number in an Array.

function findSmallestNum() {
  let arr = [32, 5, 324, 5, 245, 6, 34, 6, 3, 8];

  let smallestNum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  console.log(smallestNum);
}
// findSmallestNum();

// 5. Find Largest Number in an Array.

function findLargestNum() {
  let arr = [32, 5, 324, 5, 245, 6, 34, 6, 3, 8];

  let LargestNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > LargestNum) {
      LargestNum = arr[i];
    }
  }
  console.log(LargestNum);
}
// findLargestNum()

// 6. Remove Duplicates from Sorted Array.

function removeDuplicates() {
  let arr = [0, 1, 1, 1, 2, 3, 4, 4, 4, 5];

  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  let arr2 = arr.slice(0, x + 1);
  console.log(arr2);
}
// removeDuplicates();

// 7. Remove Element.

function removeElements() {
  let arr = [1, 3, 4, 2, 4, 3, 5, 3];
  let x = 0;
  let val = 3;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x++;
    }
  }
  let arr2 = arr.slice(0, x);
  console.log(arr2);
}
// removeElements()

// 8. reverse sting.

function reverseString() {
  let str = ["h", "e", "l", "l", "o"];
  let half = str.length / 2;

  for (let i = 0; i < half; i++) {
    let temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }
  console.log(str);
}
// reverseString()

// 9. Merge Sorted Array.

function mergeSortedArraywithextraSpace() {
  let nums1 = [];
  let nums2 = [1];
  let p1 = 0;
  let p2 = 0;

  let m = 0;
  let n = 1;

  let numsCopy = new Array(m + n);

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1[p1] < nums2[p2])) {
      numsCopy[i] = nums1[p1];
      p1++;
    } else {
      numsCopy[i] = nums2[p2];
      p2++;
    }
  }
  console.log(numsCopy);
}
// mergeSortedArray();

// 2nd uproach without extra space

function mergeSortedArraywithoutExtraSpace() {
  let nums1 = [1, 2, 3];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;

  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1);
}
// mergeSortedArraywithoutExtraSpace();

// 10. best time to buy and sell stock.

function bestTimeToBuyAndSellStock() {
  let prices = [7, 1, 5, 3, 6, 4];
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }
  console.log(maxProfit);
}
// bestTimeToBuyAndSellStock();

function moveZeros() {
  let arr = [1, 2, 3, 0, 0, 5, 0, 5, 9, 0, 7, 0, 8, 0, 0, 7];
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}
// moveZeros();

function maxConsacativeOnce() {
  let arr = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1];
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    }
  }
  return maxCount;
}
let max = maxConsacativeOnce();
console.log(max);
