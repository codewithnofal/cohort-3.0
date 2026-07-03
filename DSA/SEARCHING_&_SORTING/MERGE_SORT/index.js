// Sort an Array.
let arr = [5, 4, 3, 1, 8];
function merge() {}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.splice(0, mid));
  let right = mergeSort(arr.splice(mid));
  
}
mergeSort(arr);
