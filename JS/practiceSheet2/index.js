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


