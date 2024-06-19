// "Factory functions" are functions that returns an "Object"

// Example:
function createProduct(name, price, discount = 10) {
  return {
    name,
    price,
    discount,
    calculateTotalPrice(price, discount) {
      const discountPrice = (price * discount) / 100;

      return price - discountPrice;
    },
  };
}

const product = createProduct("Banana", 5.99);
console.log(product);
