const manufacturers = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
  console.log(`Manufacturer ${index + 1}: ${name}`);
}

manufacturers.forEach(print); // forEach(p: value, s: index, t: array); in this case "t" was used.
