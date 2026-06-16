// 1.

// const products = [
//   { id: 1, name: "iphone" },
//   { id: 2, name: "samsung" },
//   { id: 3, name: "OnePlus" },
// ];

// let product = products.map((p)=>p.name)
// console.log(product)

// 2.

// const prices = [100, 200, 300, 400];

// let gstPricess = prices.map((p) => p + (p * 18) / 100);
// console.log(gstPricess)

// 3.

// const products = [
//   { name: "Phone", price: 50000 },
//   { name: "Book", price: 500 },
//   { name: "Laptop", price: 70000 },
// ];

// let filteredProducts = products.filter((p) => p.price > 1000);
// console.log(filteredProducts)

// 4.

// const users = [
//   { name: "Ali", active: true },
//   { name: "Ahmed", active: false },
//   { name: "Nofil", active: true }
// ];

// let activeUsers = users.filter((u)=>u.active)
// console.log(activeUsers)

// 5.

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Nofil" },
//   { id: 3, name: "Ahmed" }
// ];

// let findUser = users.find((u)=>u.id === 2)
// console.log(findUser)

// 6.

// const products = [
//   { id: 1, name: "iPhone" },
//   { id: 2, name: "Samsung" },
//   { id: 3, name: "OnePlus" },
// ];

// let findPhone = products.find((p) => p.name === "OnePlus");

// console.log(findPhone)

// 7.
// const prices = [100, 200, 300, 400];

// let total = prices.reduce((acc, val) => acc + val, 0);
// console.log(total)

// 8.

// const cart = [{ price: 1000 }, { price: 2000 }, { price: 3000 }];

// let total = cart.reduce((acc, val) => {
//   return (acc += val.price);
// }, 0);

// console.log(total);

// 9.

// const user = {
//   name: "Nofil",
//   age: 21
// };

// user.city = "Ahmedabad"
// console.log(user)

// delete user.city

// console.log(user)

// class CreateStudens {
//   constructor(name, age, grade, city) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//     this.city = city;
//   }
//   greet() {
//     console.log("hello", this.name);
//   }
// }
// let st1 = new CreateStudens("Nofal", 22, "A+", "Ahmedabad");
// st1.greet()

// 1st uproach
// let nums1 = [1, 2, 3];
// let nums2 = [2, 5, 6, 12];

// let m = 3;
// let n = 4;

// let p1 = 0;
// let p2 = 0;

// let nums1Copy = nums1.slice(0, m);

// for (let i = 0; i < m + n; i++) {
//   if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//     nums1[i] = nums1Copy[p1];
//     p1++;
//   } else {
//     nums1[i] = nums2[p2];
//     p2++;
//   }
// }
// console.log(nums1);

// 2nd uproach optimized

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

let m = 3;
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
console.log(nums1)