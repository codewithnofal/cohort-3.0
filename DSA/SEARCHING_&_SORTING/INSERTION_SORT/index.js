let arr = [7, 4, 3, 5, 1, 2];
function insertionSort(a) {
  let n = a.length;

  for (let i = 1; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;

    while (prev >= 0 && a[prev] > curr) {
      a[prev + 1] = a[prev];
      prev--;
    }
    a[prev + 1] = curr;
  }
  return a
}
console.log(insertionSort(arr));
