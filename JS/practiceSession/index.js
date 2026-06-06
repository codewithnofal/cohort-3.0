// 1.

function findPrimiumProducts() {
  let prices = [100, 250, 500, 150, 700];

  let filteredPrice = prices.filter((price) => price > 300);
  console.log(filteredPrice);
}
// findPrimiumProducts();

// 2.

function findTotalAndEverage() {
  let marks = [80, 90, 70, 85, 95];

  let total = marks.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  let average = total / marks.length;
  console.log(average);
  //   console.log(total);
}
// findTotalAndEverage();

// 3.

function mostFrequencyCount() {
  let nums = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

  let count = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (count[num]) {
      count[num] = count[num] + 1;
    } else {
      count[num] = 1;
    }
  }
  // console.log(count);

  let frequency = 0;
  let mostFrequent;

  for (let key in count) {
    if (count[key] > frequency) {
      frequency = count[key];
      mostFrequent = key;
    }
  }
  console.log(mostFrequent);
}
// mostFrequencyCount();
