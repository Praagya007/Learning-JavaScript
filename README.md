# JavaScript Learning Journey 🚀

A comprehensive collection of JavaScript projects and exercises documenting my journey from fundamentals to advanced concepts. This repository contains 15+ days of hands-on learning, covering everything from basic syntax to complex web applications with API integration.

## 📚 Repository Structure

```
javascript-learning/
├── Day 1/          # JavaScript Basics & Utilities
├── Day 2/          # Functions & Closures
├── Day 3/          # Arrays & Methods
├── Day 4/          # Objects Deep Dive
├── Day 5/          # Classes & Prototypes
├── Day 6/          # DOM Manipulation
├── Day 7/          # Calculator Project
├── Day 8/          # Todo App (Combined Version)
├── Day 9/          # Todo App (Modular Version)
├── Day 10/         # Internationalization & Regex
├── Day 11/         # Async JS I - Promises
├── Day 12/         # Async JS II - Async/Await
├── Day 13/         # Fetch API & HTTP Methods
├── Day 14/         # State Management Pattern
└── Day 15/         # GitHub User Search App
```

## 🎯 Projects Overview

### 🧮 Calculator App (Day 7)
A fully functional calculator with advanced features:
- Basic arithmetic operations (+, -, *, /, %)
- Parentheses support for complex expressions
- Smart input handling (prevents multiple zeros, handles decimals)
- **Theme Toggle**: Light/Dark mode with localStorage persistence
- **Keyboard Support**: Full keyboard navigation
- **Math.js Integration**: Reliable expression evaluation

**Tech Stack**: HTML5, CSS3, Vanilla JavaScript, Math.js

[View Calculator README](Day%207/README.md)

---

### ✅ Todo List App (Days 8-9)
A modern task management application with two implementations:

**Day 8**: Monolithic version with all logic in one file  
**Day 9**: Modular version with separated concerns

**Features**:
- Add, toggle, and delete todos
- Filter by All/Active/Completed
- Task counter with smart pluralization
- LocalStorage persistence
- Keyboard shortcuts (Enter to add)
- Clean, responsive UI

**Tech Stack**: HTML5, CSS3, ES6 Modules

---

### 👤 GitHub User Search (Day 15)
A professional GitHub user search application with pagination and detailed profiles:

**Features**:
- Real-time GitHub user search
- Paginated results (12 users per page)
- Detailed user profiles in modal view
- Loading states and error handling
- YouTube-style clear button
- State persistence across refreshes
- ESC key modal close
- Fully responsive design

**Tech Stack**: HTML5, CSS3, ES6 Modules, GitHub REST API, localStorage

[View GitHub Search README](Day%2015/README.md)

---

## 📖 Learning Topics Covered

### Core JavaScript (Days 1-5)

#### Day 1: Fundamentals
- String manipulation (`reverse`, `split`, `join`)
- Type checking with `typeof`
- Array operations (`sumArray`, `countVowels`)
- String methods: `trim()`, `slice()`, `includes()`, `split()`

#### Day 2: Functions & Closures
- **Closures**: Private state management with `makeCounter()`
- **IIFE**: Immediately Invoked Function Expressions
- **this keyword**: `call()`, `apply()`, `bind()`
- Higher-order functions

#### Day 3: Arrays
**Basics (Day 3a)**:
- CRUD operations
- `push`, `pop`, `shift`, `unshift`
- `slice` vs `splice`
- `Array.from()`, `for...of` loops
- Custom utilities: `chunk()`, `flattenOneLevel()`

**Advanced (Day 3b)**:
- `map()`: Transform arrays
- `filter()`: Conditional selection
- `reduce()`: Aggregation and transformation
- `find()`, `some()`, `every()`
- `sort()`: Custom sorting logic
- `groupBy()`: Data organization

#### Day 4: Objects Deep Dive
- Object literals and nested objects
- Dot vs bracket notation
- Destructuring and rest/spread operators
- Shallow vs deep copying (`structuredClone`)
- `Object.keys()`, `Object.values()`, `Object.entries()`
- Prototypal inheritance with `Object.create()`
- Optional chaining (`?.`) and nullish coalescing (`??`)
- Safe nested property access

#### Day 5: Classes & Prototypes
- Prototypal inheritance
- ES6 Classes and constructors
- Class inheritance with `extends`
- Factory functions vs Classes
- `instanceof` operator
- **Timer Project**: Multiple implementations
  - Basic class-based timer
  - Factory function timer
  - Advanced timer with pause/resume

**Key Reflection**: Classes provide better ergonomics for larger projects with inheritance needs, while factory functions work well for single-use cases.

---

### DOM & Events (Day 6)

#### Day 6a: DOM Fundamentals
- Selectors: `querySelector`, `querySelectorAll`
- Creating and inserting elements
- `innerHTML` vs `textContent`
- Attributes: `getAttribute()`, `setAttribute()`
- `classList` manipulation
- Inline styles with `.style`
- `dataset` API for data attributes

#### Day 6b: Events & Forms
- Event object properties
- Event bubbling vs capturing
- **Event delegation** for dynamic elements
- Form validation with `preventDefault()`
- Keyboard event handling
- Practical: Login form with validation

---

### Internationalization & Regex (Day 10)
- `Date` object and methods
- `Intl.DateTimeFormat` for localized dates
- `Intl.NumberFormat` for currency formatting
- Regex patterns for validation:
  - Username validation: `/^[a-zA-Z0-9]{3,12}$/`
  - Website validation with domain checking
- Date formatting across locales (UK, German, Japanese, Nepali)

---

### Async JavaScript (Days 11-12)

#### Day 11: Promises & Event Loop
**Concepts**:
- Call Stack, Web APIs, Event Loop
- Microtask vs Macrotask queues
- Promise states: Pending, Fulfilled, Rejected
- `.then()`, `.catch()`, `.finally()`
- Promise chaining

**Exercises**:
- Wrapping `setTimeout` in promises
- Event loop execution order
- Simulated login flow: `loginUser` → `fetchProfile` → `fetchPosts`

#### Day 12: Async/Await & Error Handling
**Features**:
- `async`/`await` syntax
- `try`/`catch`/`finally` blocks
- **Promise Combinators**:
  - `Promise.all()`: All or nothing
  - `Promise.race()`: First to finish wins
  - `Promise.allSettled()`: All results, no rejection
  - `Promise.any()`: First success matters
- **AbortController**: Cancel fetch requests
- Timeout implementation with auto-abort

---

### Fetch API & HTTP (Day 13)

**Core Topics**:
- GET requests with error handling
- POST, PUT, DELETE operations
- HTTP headers and JSON payloads
- Status code handling
- CORS basics
- Rate limiting awareness
- Pagination with query parameters

**Advanced Patterns**:
- Exponential backoff retry logic
- Request/response headers inspection
- Real API examples with JSONPlaceholder

---

### State Management (Day 14)
- Centralized state pattern
- Immutable state updates
- Re-rendering on state changes
- Keyboard shortcut integration
- Counter example with multiple operations

---

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Languages** | JavaScript (ES6+), HTML5, CSS3 |
| **APIs** | GitHub REST API, JSONPlaceholder |
| **Libraries** | Math.js (calculator expressions) |
| **Storage** | LocalStorage API |
| **Concepts** | Promises, Async/Await, Fetch API, ES6 Modules |
| **Tools** | Browser DevTools, Regex, Intl API |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS (for understanding the code)

### Running Projects Locally

1. **Clone the repository**:
```bash
git clone https://github.com/Praagya007/Learning-JavaScript.git
cd javascript-learning
```

2. **Navigate to any day's project**:
```bash
cd "Day 7"  # Calculator
cd "Day 9"  # Todo App
cd "Day 15" # GitHub Search
```

3. **Open in browser**:
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**Note**: Some projects (Days 9 and 15) use ES6 modules. You may need to run a local server to avoid CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

---

## 💡 Key Learning Highlights

### 1. **Modular Code Organization**
Progressed from monolithic scripts (Day 8) to modular architecture (Days 9, 15):
```
Day 9: main.js, ui.js, storage.js
Day 15: main.js, api.js, ui.js
```

### 2. **Error Handling Best Practices**
- Comprehensive `try`/`catch` blocks
- User-friendly error messages
- Loading states for async operations
- Graceful degradation

### 3. **State Management Patterns**
- LocalStorage for persistence
- Immutable state updates
- Centralized state in larger apps

### 4. **API Integration**
- RESTful API consumption
- Pagination handling
- Rate limit awareness
- AbortController for request cancellation

### 5. **User Experience Focus**
- Keyboard shortcuts and accessibility
- Loading indicators
- Theme persistence
- Responsive design patterns

---

## 📝 Daily Breakdown

| Day | Topic | Key Concepts |
|-----|-------|--------------|
| **1** | Basics | Variables, strings, arrays, typeof |
| **2** | Functions | Closures, IIFE, call/apply/bind |
| **3** | Arrays | map, filter, reduce, sort, groupBy |
| **4** | Objects | Destructuring, spread, deep copy |
| **5** | Classes | Inheritance, prototypes, factory vs class |
| **6** | DOM | Selectors, events, delegation, forms |
| **7** | Project | Calculator with theme toggle |
| **8** | Project | Todo app (monolithic) |
| **9** | Project | Todo app (modular) |
| **10** | Intl/Regex | Date formatting, validation patterns |
| **11** | Async I | Promises, event loop, chaining |
| **12** | Async II | Async/await, combinators, AbortController |
| **13** | Fetch API | HTTP methods, headers, retry logic |
| **14** | State | Centralized state pattern |
| **15** | Project | GitHub user search with pagination |

---

## 🎓 Lessons Learned

### Technical Growth
1. **From Callbacks to Promises to Async/Await**: Understanding JavaScript's evolution in handling asynchronous code
2. **Event Loop Mastery**: Deep understanding of microtasks vs macrotasks
3. **Module Systems**: Transitioning from global scope to ES6 modules
4. **API Design**: Separation of concerns (UI, API, Storage)

### Best Practices Adopted
- ✅ Always validate user input
- ✅ Handle errors gracefully with user feedback
- ✅ Use semantic HTML and meaningful class names
- ✅ Implement keyboard shortcuts for better UX
- ✅ Persist user preferences with localStorage
- ✅ Write modular, reusable code
- ✅ Document learning journey and challenges

### Common Pitfalls Avoided
- ❌ Direct DOM manipulation without state management
- ❌ Callback hell (solved with Promises/Async)
- ❌ Ignoring error states
- ❌ Forgetting to clean up event listeners
- ❌ Mixing business logic with UI code

---

## 🔮 Future Enhancements

### Short-term Goals
- [ ] Add TypeScript to existing projects
- [ ] Implement unit tests with Jest
- [ ] Add dark mode to all projects
- [ ] Improve accessibility (ARIA labels, keyboard nav)
- [ ] Add input debouncing to search functionality

### Long-term Goals
- [ ] Build a full-stack app with Node.js backend
- [ ] Learn React and rebuild projects as components
- [ ] Implement advanced state management (Redux/Zustand)
- [ ] Add GraphQL API integration
- [ ] Deploy projects to production (Vercel/Netlify)

---

## 🤝 Contributing

This is a personal learning repository, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **JSONPlaceholder**: For providing a free REST API for testing
- **GitHub API**: For enabling the user search project
- **Math.js**: For robust mathematical expression evaluation
- **MDN Web Docs**: For comprehensive JavaScript documentation
- **The JavaScript Community**: For creating excellent learning resources

---

## 📬 Contact

- **GitHub**: [@praagya007](https://github.com/praagya007)
- **Email**: praagyadevkota@gmail.com

---

<div align="center">

**Built with ❤️ and lots of ☕ while learning JavaScript**

⭐ Star this repo if you find it helpful!

</div>
