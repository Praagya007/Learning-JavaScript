// ------------------------------
// Day 5 — Functions Fundamentals (Simplified)
// ------------------------------

// 1. Sum
const sum = (...nums) => nums.reduce((total, n) => total + Number(n), 0);
console.log(sum(1, 2, 3, "4")); // 10

// 2. Average
const average = (...nums) =>
  nums.length ? Number(nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2) : 0;
console.log(average(24, 77, 42)); // 47.67

// 3. Remove Duplicates
const removeDuplicates = arr => [...new Set(arr)];
const fruits = ["Apple", "Banana", "Cherry", "Kiwi", "Apple", "Grapes"];
console.log(removeDuplicates(fruits)); // ["Apple","Banana","Cherry","Kiwi","Grapes"]

// 4. Function Composition
const double = n => n * 2;
const square = n => n * n;
const doubleThenSquare = x => square(double(x));
console.log(doubleThenSquare(4)); // 64

// 5a. FizzBuzz
const fizzBuzz = n =>
  n % 15 === 0 ? "FizzBuzz" :
  n % 3 === 0 ? "Fizz" :
  n % 5 === 0 ? "Buzz" : n;
console.log(fizzBuzz(15)); // "FizzBuzz"

// 5b. Factorial (Recursive)
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log(factorial(5)); // 120

// 5c. Palindrome
const isPalindrome = str => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === [...cleaned].reverse().join("");
};
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false
