// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to sum an array of numbers using a loop
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Simple console tests
console.log(reverseString("hello"));           // Expected output: "olleh"
console.log(countVowels("hello world"));       // Expected output: 3
console.log(sumArray([1, 2, 3, 4]));            // Expected output: 10

// Practice typeof operator
console.log(typeof 42);              // "number"
console.log(typeof "hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof null);            // "object" (this is a known quirk in JavaScript)
console.log(typeof undefined);       // "undefined"
console.log(typeof Symbol("id"));    // "symbol"
console.log(typeof 123n);            // "bigint"
console.log(typeof {name: "JS"});    // "object"
console.log(typeof [1, 2, 3]);       // "object" (arrays are objects in JavaScript)
console.log(typeof function() {});   // "function"

//Practice string methods in JS
let str = " Hello World ";
str.reverse();  //
str.length;             // 13
str.toUpperCase();      // " HELLO WORLD "
str.trim();             // "Hello World"
str.includes("World");  // true
str.slice(1, 6);        // "Hello"
str.split(" ");         // ["", "Hello", "World", ""]
