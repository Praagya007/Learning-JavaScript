# Day 17 — Async JavaScript I: Event Loop & Promises

## Call Stack, Web APIs, Event Loop

- JavaScript runs single-threaded on the **call stack** (LIFO).
- Browser/Node provides **Web APIs** like `setTimeout`, fetch, DOM events.
- **Event Loop** manages queues:
  - **Microtask queue** (Promises, `queueMicrotask`, MutationObserver).
  - **Macrotask queue** (setTimeout, setInterval, I/O).
- Rule: Event loop clears all microtasks before moving to macrotasks.

**Example Order**

```txt
console.log("Start")  -> synchronous
Promise.resolve(...)  -> microtask
setTimeout(...)       -> macrotask
console.log("End")    -> synchronous

Output:
Start
End
Promise callback
Timeout callback
```

## Promises

A **Promise** is an object representing a future value.

**States:**
- `Pending` → initial
- `Fulfilled` → success
- `Rejected` → error

**Handlers:**
- `.then()` for success
- `.catch()` for errors
- `.finally()` for cleanup

Promises are **eager**: the executor function runs immediately when the Promise is created.

## Wrapping setTimeout in a Promise

Using `setTimeout` the traditional way leads to **callback hell** when chaining multiple async tasks.

**Solution:** Wrap `setTimeout` in a Promise to use `.then()` chaining.

**Example:** A utility function for delay.

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => console.log('1 second passed'))
  .then(() => delay(1000))
  .then(() => console.log('2 seconds passed'));
```

## Promise Chaining

Every `.then()` returns a new promise.

Returning inside `.then()` is critical:
- **Return a value** → passes value forward.
- **Return a promise** → waits before continuing.
- **No return** → passes `undefined`.

**Example:** Login → Fetch Profile → Fetch Posts.

```txt
loginUser
  ↓
fetchProfile
  ↓
fetchPosts
```

## Event Loop Flow Diagram

```text
[ Call Stack ] <----> [ Event Loop Manager ]
     ↑                          ↓
 (Executes)        Microtask Queue → Promise callbacks
                   Macrotask Queue → setTimeout, I/O
```