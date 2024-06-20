/* Object: Using literal notation */
{
  const obj = {};
  console.log(typeof obj);
}

/* Object: Using constructor function */
{
  function object(name, type = "Boolean") {
    this.name = name;
    this.type = type;
    this.getFormatedObjectAttributes = function () {
      return `Type: ${type} \nName: ${name}`;
    };
  }

  const obj2 = new object(1, "Programming Language", "JavaScript");
  console.log(typeof obj2);
}

/* Object: Factory Function */
{
  function createObject(name, type = "Boolean") {
    return {
      name,
      type,
      getFormatedObjectAttributes: function () {
        return `Type: ${type} \nName: ${name}`;
      },
    };
  }
}

/* Object: Object.create */
{
  const child = Object.create(null); // Params accepted: Object | null
  child.name = "Table";
  console.log(typeof child);
}

/* Object: JSON.parse */
{
  const fromJSON = JSON.parse(`{"info": "..."}`);
  console.log(typeof fromJSON);
  // console.log(fromJSON.info);
}
