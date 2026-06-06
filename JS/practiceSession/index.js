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
findTotalAndEverage();
