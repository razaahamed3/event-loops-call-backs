// ============================================
// Take-Home 1: Scope & Closures
// Open index.html in your browser and check
// DevTools → Console for output.
// ============================================

// --- Part 1: Scope ---

// Q1 — Three scopes
// Fill in the values for A, B, and C.
// Each color variable lives in a different scope (block, function, global).

function threeScopes() {
  // What does each console.log print?
  //
  // const color = "red";
  // function paint() {
  //   const color = "blue";
  //   if (true) {
  //     const color = "green";
  //     console.log("A:", color);
  //   }
  //   console.log("B:", color);
  // }
  // paint();
  // console.log("C:", color);

  const A = "green";
  const B = "blue";
  const C = "red";
  return { A, B, C };
}

console.log("Q1:", threeScopes());


// Q2 — var leaks
// What does console.log print after the loop?
// What would happen if you replaced var with let?

function varLeaks() {
  // function countdown() {
  //   for (var i = 3; i >= 0; i--) {}
  //   console.log("after loop:", i);
  // }

  const withVar = "-1"; // what does i equal after the loop with var?
  const withLet = "ReferenceError"; // what happens with let? (value or "ReferenceError")
  return { withVar, withLet };
}

console.log("Q2:", varLeaks());


// Q3 — Hoisting trap
// var a and let b are both used before their declaration.
// What does each console.log produce?

function hoistingTrap() {
  // function mystery() {
  //   console.log(a);
  //   console.log(b);
  //   var a = 10;
  //   let b = 20;
  // }

  const a = "undefined"; // what does console.log(a) output? (value or "ReferenceError")
  const b = "ReferenceError"; // what does console.log(b) output? (value or "ReferenceError")
  return { a, b };
}

console.log("Q3:", hoistingTrap());


// Q4 — const gotcha
// Does this throw an error? What does console.log print?

function constGotcha() {
  // const user = { name: "Alex", age: 25 };
  // user.age = 26;
  // console.log(user.age);

  const result = "26"; // what prints? (value or "TypeError")
  return result;
}

console.log("Q4:", constGotcha());


// Q5 — Redeclaration
// Which snippet throws an error — A, B, or both?

function redeclaration() {
  // Snippet A:  var x = 1; var x = 2; console.log(x);
  // Snippet B:  let y = 1; let y = 2; console.log(y);

  const snippetA = "2"; // what does it print? (value or "SyntaxError")
  const snippetB = "SyntaxError"; // what does it print? (value or "SyntaxError")
  return { snippetA, snippetB };
}

console.log("Q5:", redeclaration());


// --- Part 2: Closures ---

// Q6 — Basic closure
// The inner function "remembers" greeting even after createGreeter finishes.
// Fill in what each console.log prints.

function basicClosure() {
  // function createGreeter(greeting) {
  //   return function (name) {
  //     return greeting + ", " + name + "!";
  //   };
  // }
  // const sayHi = createGreeter("Hi");
  // const sayHello = createGreeter("Hello");
  //
  // console.log(sayHi("Alex"));
  // console.log(sayHello("Sam"));

  const line1 = "Hi, Alex!"; // sayHi("Alex")
  const line2 = "Hello, Sam!"; // sayHello("Sam")
  return { line1, line2 };
}

console.log("Q6:", basicClosure());


// Q7 — Factory function
// Write createUser(name, role) — a factory that returns an object with:
// - name      → the name passed in
// - role      → the role passed in
// - introduce() → returns "Hi, I'm {name} and I'm a {role}"
//
// No classes needed — just return a plain object.

function createUser(name, role) {
  return {
    name: name,
    role: role,
    introduce: function() {
      return "Hi, I'm " + this.name + " and I'm a " + this.role;
    }
  };
}

const user1 = createUser("Alex", "designer");
const user2 = createUser("Sam", "developer");
console.log("Q7:", user1.introduce()); // "Hi, I'm Alex and I'm a designer"
console.log("Q7:", user2.introduce()); // "Hi, I'm Sam and I'm a developer"


// Q8 — Higher-order function
// Write applyToAll(arr, fn) — takes an array and a function,
// returns a new array where fn has been called on every element.
//
// Do NOT use .map() — use a for loop instead.
// This is what .map() does under the hood.

function applyToAll(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

console.log("Q8:", applyToAll([1, 2, 3], (n) => n * 2));       // [2, 4, 6]
console.log("Q8:", applyToAll(["hi", "bye"], (s) => s + "!"));  // ["hi!", "bye!"]
