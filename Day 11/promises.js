// ==========================
// Day 17 - Async JS I
// Event Loop & Promises
// ==========================

// -------- Exercise 1: Event Loop Order --------
console.log("1: Start");

setTimeout(() => console.log("2: Timeout"), 0);

Promise.resolve()
  .then(() => console.log("3: Promise 1"))
  .then(() => console.log("4: Promise 2"));

console.log("5: End");

// -------- Exercise 2: Pizza Order (Promise States) --------
let orderPizza = new Promise((resolve, reject) => {
  let success = Math.random() > 0.5; // 50/50 chance
  setTimeout(() => {
    if (success) resolve("Pizza is ready 🍕");
    else reject("No dough 😞");
  }, 1000);
});

orderPizza
  .then(msg => console.log("✅ Success:", msg))
  .catch(err => console.log("❌ Error:", err))
  .finally(() => console.log("🎉 Order process complete."));

// -------- Exercise 3: Delay Utility --------
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.log("Start delay...");
delay(2000)
  .then(() => console.log("2 seconds later ⏰"))
  .then(() => delay(1000))
  .then(() => console.log("3 seconds total ⏰⏰"));

// -------- Exercise 4: Login → Profile → Posts --------
function loginUser(username) {
  return new Promise(resolve => {
    console.log("Logging in...");
    setTimeout(() => resolve({ username }), 1000);
  });
}

function fetchProfile(user) {
  return new Promise(resolve => {
    console.log("Fetching profile...");
    setTimeout(() => resolve({ username: user.username, age: 25 }), 1000);
  });
}

function fetchPosts(profile) {
  return new Promise(resolve => {
    console.log("Fetching posts...");
    setTimeout(() => resolve(["Post1", "Post2", "Post3"]), 1000);
  });
}

loginUser("andras009")
  .then(user => {
    console.log("User logged in:", user);
    return fetchProfile(user); // ✅ return is crucial
  })
  .then(profile => {
    console.log("Profile:", profile);
    return fetchPosts(profile); // ✅ return is crucial
  })
  .then(posts => console.log("Posts:", posts))
  .catch(err => console.log("Error:", err));
