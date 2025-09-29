// Closures example.

function makeCounter() {
  let count = 0;  // private state
  
  return {
    inc() {
      count++;
      return count;
    },
    dec() {
      count--;
      return count;
    },
    reset() {
      count = 0;
      return count;
    }
  };
}

// Testing
const counter = makeCounter();
console.log(counter.inc());   // 1
console.log(counter.inc());   // 2
console.log(counter.dec());   // 1
console.log(counter.reset()); // 0
console.log(counter.dec());   // -1

//This keyword basics: call apply and bind
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello"); // Hello, Alice
greet.apply(person, ["Hi"]); // Hi, Alice

const boundGreet = greet.bind(person);
boundGreet("Hey"); // Hey, Alice

//IIFE
const myModule = (function() {
  let privateVar = 0;
  
  return {
    increment() {
      privateVar++;
      return privateVar;
    },
    reset() {
      privateVar = 0;
    }
  };
})();

console.log(myModule.increment());  // 1
console.log(myModule.increment());  // 2
console.log(myModule.reset());//0


