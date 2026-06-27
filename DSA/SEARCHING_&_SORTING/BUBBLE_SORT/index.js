// Sort Colors.

function bubbleSort() {
  let nums = [2, 0, 2, 1, 1, 0];

  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }

  return nums
}
console.log(bubbleSort());
