// IIFE => Immediately Invoked Function Expression

(function () {
  console.log("Hello World");
})();

(function (a, b) {
  console.log(`Variables passed in: ${a} and ${b}`);
})("hello", "world");
