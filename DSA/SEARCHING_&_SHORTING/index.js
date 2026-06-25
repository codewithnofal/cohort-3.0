// Binary Search.

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

function bSearch(n, target) {
  let left = 0;
  let right = n.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (n[mid] === target) {
      return mid;
    } else if (target < n[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
let ans = bSearch(nums, target);
console.log(ans);
