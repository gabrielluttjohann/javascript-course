const newLine = () => console.log();

const print = (obj) => {
  console.log(`"${obj.name}" has access to the attributes:`);
  if (obj.attr1 !== undefined) console.log(`Child`);
  if (obj.attr2 !== undefined) console.log(`Father`);
  if (obj.attr3 !== undefined) console.log(`Grandpa`);
  if (obj.attr4 !== undefined) console.log(`Object.prototype.attr4`);
  newLine();
};

// Prototype Chain
Object.prototype.attr4 = "D";
const grandpa = { name: "Grandpa", attr3: "C" };
const father = { __proto__: grandpa, name: "Father", attr2: "B" };
const child = { __proto__: father, name: "Child", attr1: "A" };

print(grandpa);
print(father);
print(child);
