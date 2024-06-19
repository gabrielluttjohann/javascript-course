// ================== Class ==================
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const p1 = new Person("John");
p1.speak();

// ================== Function ==================
function functionPerson(name = "") {
  this.name = name;

  this.speak = () => {
    console.log(`Hello, my name is ${this.name}!`);
  };
}

const p2 = new functionPerson("John");
p2.speak();
