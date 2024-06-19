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

// ================== Factory ==================
const createPerson = (name) => {
  return {
    speak: () => console.log(`Hello, my name is ${name}!`),
  };
};

p2 = createPerson("Petter");
p2.speak();
