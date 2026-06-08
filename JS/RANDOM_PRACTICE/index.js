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



