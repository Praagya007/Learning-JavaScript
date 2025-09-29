// Day 9 — Array Methods Power-Ups

const users = [
  { id: 1, firstName: 'Asha', lastName: 'Shrestha', age: 28, active: true, role: 'admin' },
  { id: 2, firstName: 'Bikash', lastName: 'Gautam', age: 22, active: false, role: 'editor' },
  { id: 3, firstName: 'Charu', lastName: 'KC', age: 31, active: true, role: 'viewer' },
  { id: 4, firstName: 'Deepa', lastName: 'Thapa', age: 19, active: false, role: 'viewer' },
  { id: 5, firstName: 'Eshan', lastName: 'Adhikari', age: 40, active: true, role: 'admin' },
];

// ---------------------------
// 1. MAP — Transform array
// ---------------------------
const squared = [1, 2, 4, 9].map(n => n * n);
console.log("Squared:", squared);

const fullNames = users.map(u => `${u.firstName} ${u.lastName}`);
console.log("Full Names:", fullNames);

const idAndName = users.map(u => ({ id: u.id, fullName: `${u.firstName} ${u.lastName}` }));
console.log("ID and Name Objects:", idAndName);

const nameAndAge = users.map(u => `${u.firstName}, ${u.age} years old`);
console.log("Name and Age:", nameAndAge);

// ---------------------------
// 2. FILTER — Keep only matching elements
// ---------------------------
const activeUsers = users.filter(u => u.active);
console.log("Active Users:", activeUsers);

const filterByAge = users.filter(u => u.age < 30 && u.age > 20);
console.log("Users aged 21-29:", filterByAge);

// ---------------------------
// 3. REDUCE — Collapse array
// ---------------------------
const sumAges = users.reduce((sum, u) => sum + u.age, 0);
console.log("Sum of Ages:", sumAges);

const productArray = [1, 2, 5, 4];
const multiplyArray = productArray.reduce((total, current) => total * current, 1);
console.log("Product of Array:", multiplyArray);

const userRefined = users.reduce((acc, user) => {
  acc[user.id] = `${user.firstName} ${user.lastName}`;
  return acc;
}, {});
console.log("User Refined (ID → Full Name):", userRefined);

// ---------------------------
// 4. FIND — First matching element
// ---------------------------
const userRectify = users.find(user => user.id > 3);
console.log("First user with id>3:", userRectify);

// ---------------------------
// 5. SOME & EVERY — Boolean checks
// ---------------------------
const findingSome = users.some(user => user.age < 20);
console.log(`Is there any user under 20? ${findingSome}`);

const findingEvery = users.every(user => user.age >= 18);
console.log(`Are all users 18+? ${findingEvery}`);

// ---------------------------
// 6. SORT — Ordering arrays
// ---------------------------

/*...used to create a shallow copy, avoids modifying og array.
If result's negative, it gets sorted first. 
*/
const DescendingSort = [...users].sort((a, b) => b.age - a.age); 
console.log("Users by Age Descending:", DescendingSort);


const sortByLastName = [...users].sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log("Users Sorted by Last Name:", sortByLastName);

// ---------------------------
// 7. GROUP BY — Using reduce
// ---------------------------
const groupBy = (array, key) => {
  return array.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(obj);
    return acc;
  }, {});
};

const groupedByRole = groupBy(users, 'role');
console.log("Grouped by Role:", groupedByRole);

// ---------------------------
// Deliverables summary:
// 1. Active users ✔️
// 2. Average age ✔️
const averageAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;
console.log("Average Age:", averageAge);

// 3. Names sorted by last name ✔️ (already above)
// 4. Reduce exercises: sum, product ✔️
// 5. groupBy working ✔️
