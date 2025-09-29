// === Day 8 — Arrays Basics ===

// ─────────────────────────────
// 1. Create / Read / Update
// ─────────────────────────────

const colors = ['red', 'green', 'blue'];
console.log('Colors:', colors);
console.log('Second color:', colors[1]);
colors[3] = 'violet';
console.log('Updated colors:', colors);

// ─────────────────────────────
// 2. push / pop / shift / unshift
// ─────────────────────────────

const numbers = [10, 20, 30];
numbers.shift(); // remove first
console.log('After shift:', numbers);
numbers.unshift(5); // add to start
console.log('After unshift:', numbers);
numbers.pop(); // remove last
console.log('After pop:', numbers);

// ─────────────────────────────
// 3. slice vs splice
// ─────────────────────────────

const numeros = [1, 2, 3, 4, 5, 6];
let sliced = numeros.slice(2, 5);
console.log('Sliced (2,5):', sliced);

let spliced = numeros.splice(2, 2, 'x', 'y');
console.log('Spliced:', numeros); // destructive, mutates original, avoid as much as possible!

// ─────────────────────────────
// 4. Iteration: for, for...of, Array.from
// ─────────────────────────────

const items = ['pen', 'pencil', 'eraser'];

for (let i = 0; i < items.length; i++) {
  console.log(`Index ${i}: ${items[i]}`);
}

for (let item of items) {
  console.log('Item:', item);
}

let itemsLength = Array.from(items, item => item.length);
console.log('Item lengths:', itemsLength);

const numerosString = '1234567';
let numberArray = Array.from(numerosString, num => Number(num));
console.log('Number array:', numberArray);

// ─────────────────────────────
// 5. Min and Max
// ─────────────────────────────

const nums = [10, 988, 33, 11, 4, 5, 79, 77];
let min_value = Math.min(...nums);
let max_value = Math.max(...nums);
console.log("Minimum:", min_value);
console.log("Maximum:", max_value);

// ─────────────────────────────
// 6. chunk(array, size)
// ─────────────────────────────

function chunk(arr, size) {
  if (size <= 0) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size)); 
  }
  return result;
}

console.log("Chunked:", chunk([1, 2, 3, 4, 5], 2));

// ─────────────────────────────
// 7. flattenOneLevel(array)
// ─────────────────────────────

function flattenOneLevel(arr) {
  return arr.flat(Infinity); // Deep flatten, keeps flattening, best for nested arrays.
}

console.log("Flattened:", flattenOneLevel([1, [2, 3], [[4, [5]], 6]]));
