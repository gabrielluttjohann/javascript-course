/*
 * Variable (@)
 * Points to (=>)
 * Memory address (#[id])
 * Stores (%[value])
 */

{
  const memoryAddress1 = { obj: "obj" }; // memoryAddress1 => #[1] (%{ obj: "obj" })
  const memoryAddress2 = { obj: "obj" }; // memoryAddress2 => #[2] (%{ obj: "obj" })

  /*
   * Look at the example:
   */
  const object = memoryAddress1; // @(object) => #[1]

  /*
   * Since the defined variable is a constant,
   * it cannot point to another memory address,
   * as in the code below:
   */
  // object = memoryAddress2; // Error: Assignment to constant variable.
}

{
  /*
   * When you use Object.freeze(object), the object is 'frozen'.
   * This means that you cannot modify its properties (including adding or removing properties)
   * or change its prototype. In the example below, attempts to modify the name property of
   * person will be silently ignored (in non-strict mode) or throw an error (in strict mode).
   */

  const object = { name: "Mary" };
  Object.freeze(object);
  object.name = "John"; // silently ignored in non-strict mode, throws an error in strict mode
  console.log(object.name); // "Mary"
}
