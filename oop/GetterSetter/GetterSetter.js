const print = (information) => console.log(information);

const identifier = {
  _id: 1, // _ = It's a convention
  get id() {
    return this._id++;
  },
  set id(newId) {
    if (newId > this._id) {
      this._id = newId;
    }
  },
};

print(identifier.id); // 1
print(identifier.id); // 2

identifier.id = 5;
print(identifier.id); // 5