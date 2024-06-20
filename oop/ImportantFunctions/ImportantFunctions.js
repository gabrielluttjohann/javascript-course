const print = (information) => console.log(information);
const person = {
  name: "John",
  age: 30,
  weight: 85,
};

{
  const keys = Object.keys(person);
  print(keys);
}

{
  const values = Object.values(person);
  print(values);
}

{
  const entries = Object.entries(person);
  print(entries);

  entries.forEach(([key, value]) => {
    print(`${key}: ${value}`); //
  });
}

{
  const newProperty = Object.defineProperty(person, "birthdayDate", {
    enumerable: true,
    writable: false,
    value: new Date().toJSON().slice(0, 10),
  });

  console.log(newProperty);
}

{
  const destination = { a: 1 };
  const object1 = { b: 2 };
  const object2 = { c: 3, a: 4 };
  const obj = Object.assign(destination, object1, object2);
  print(obj);
}
