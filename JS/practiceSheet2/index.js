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

// Question 8 — Student Class System.

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getGrade() {
    let grade;
    if (this.marks >= 91 && this.marks <= 100) {
      grade = "A";
    } else if (this.marks >= 75 && this.marks <= 90) {
      grade = "B";
    } else if (this.marks >= 61 && this.marks <= 74) {
      grade = "C";
    } else {
      grade = "F";
    }
    console.log(grade);
  }
}
// let st1 = new Student("Nofal", 93);
// st1.getGrade();

// Question 9 — Employee Inheritance.

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   work() {
//     console.log(
//       `${this.name} is working here and his salary is ${this.salary}`,
//     );
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary) {
//     super(name, salary);
//   }
//   code() {
//     console.log(this.name);
//   }
// }

// let dev1 = new Developer("Nofal", 100000);
// dev1.work();

// Question 10 — Bank Account (InterviewLevel).

class BankAccount {
  #balance = 0;

  deposite(amount) {
    return (this.#balance += amount);
  }
  withdraw(amount) {
    return (this.#balance -= amount);
  }
  getBalance() {
    return console.log(this.#balance);
  }
}

// let acc1 = new BankAccount();

// acc1.deposite(1000)
// acc1.withdraw(300)

// acc1.getBalance()
