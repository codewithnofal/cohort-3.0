// 1. Sum of first n numbers.

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
// console.log(sum(5));

// 2. sum of all numbers in array.

let arr = [5, 3, 2, 0, 1, 4];
function sum(n) {
  if (n === 0) return arr[n];

  return arr[n] + sum(n - 1);
}
// console.log(sum(arr.length - 1));

// 3. sum of all odd numbers in array.

function sum(n) {
  let isOdd = arr[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum(n - 1);
}
console.log(sum(arr.length - 1))
