const print = (information) => console.log(information);

/* 
const product = new Object();
product.name = "Table";
product["manufacturer"] = "Petter";

print(product);

delete product["manufacturer"];
print(product);
*/

// Objects are "Dynamic Collection" of "Keys/Values"

const car = {
  /* key: */ model: /* value: */ "A4",
  value: 89000,
  dpvatTax: 0.2,
  owner: {
    name: "John",
    age: 30,
    address: {
      Street: "ABCDE",
      number: 123,
    },
  },
  conductors: [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Mary",
      age: 25,
    },
  ],
  calculateTax: function () {
    return this.value * this.dpvatTax;
  },
};

car.owner.address.number = 456;
print (car)