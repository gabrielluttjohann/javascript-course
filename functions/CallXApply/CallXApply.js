const print = (information) => console.log(information);

function getPrice(tax = 0, coin = "R$") {
  return `${coin} ${this.price * (1 + tax)}`;
}

const car = { price: 4000 };

print(getPrice.call(car));
print(getPrice.call(car, 0.17, "$"));

print(getPrice.apply(car));
print(getPrice.apply(car, [0.17, "$"]));
