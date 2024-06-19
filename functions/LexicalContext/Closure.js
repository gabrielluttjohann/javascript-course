/*
 * "Closure" is the scope created when a function is declared.
 * This scope allows the function to access and manipulate external variables outside the function.
 */

// Lexical context in action:
const value = "Global";

function outer() {
  const value = "Local";
  function inner() {
    console.log(value);
  }

  return inner;
}

const myFunction = outer();
myFunction();
