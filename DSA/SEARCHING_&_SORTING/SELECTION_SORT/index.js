//  Height Checker.

function heightChecker() {
  let height = [1, 1, 4, 2, 1, 3];

  let expected = [...height];

  let n = expected.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (expected[j] < expected[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = expected[i];
      expected[i] = expected[min];
      expected[min] = temp;
    }
  }

  let count = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] !== expected[i]) {
      count++;
    }
  }
  return count;
}
console.log(heightChecker());
