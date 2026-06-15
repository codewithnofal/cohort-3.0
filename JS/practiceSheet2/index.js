// Question 3 — call().

function introduce() {
  console.log(this.name);
}
// const person = { name: "Ritik" };

// introduce.call(person)

// Question 4 — apply().

function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}
// const person = { name: "Ritik" };

// introduce.apply(person,["Ahmedabad", "India"])

// 🟡 Moderate Level (Q5 - Q7).

// Question 5 — Fix Lost.

const user = {
  name: "Ritik",
  greet() {
    console.log(this.name);
  },
};

// const fn = user.greet.bind(user)
// fn()

// Question 6 — Create an Inheritance Chain.

// const animal = { eats: true };

// const dog = Object.create(animal);

// console.log(dog.eats)

// Question 7 — Prototype Method.

function Person(name) {
  this.name = name;
}

// Person.prototype.greet = function() {
//     console.log("Welcome", this.name)
// }

// let p1 = new Person("Nofal")
// p1.greet()

// 🔴 Hard Level (Q8 - Q10).


