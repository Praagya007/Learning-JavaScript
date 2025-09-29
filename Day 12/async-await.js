// ------------------------------
// 1. Async/Await with Try/Catch/Finally
// ------------------------------
async function fetchUser() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await res.json();
    console.log('User:', data);
  } catch (err) {
    console.error('Error fetching user:', err);
  } finally {
    console.log('Finished trying to fetch user');
  }
}

// ------------------------------
// 2. Promise Combinators
// ------------------------------
function demoPromiseAll() {
  Promise.all([ //Resolves all if success and rejects if one failure. 
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2')
  ])
  .then(responses => console.log('All succeeded ✅', responses))
  .catch(err => console.error('One failed ❌', err));
}

function demoPromiseRace() {
  Promise.race([ // Whichever promise finishes first — success or failure — decides the result.
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/invalid-endpoint') // will fail fast
  ])
  .then(res => console.log('Winner:', res))
  .catch(err => console.error('First failure ❌', err));
}

function demoPromiseAllSettled() {
  Promise.allSettled([
    /*
    Wait for all. Never rejects — instead, it returns an array like: [ { status: "fulfilled", value: ... }, { status: "rejected", reason: ... } ]
    */
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  ])
  .then(results => console.log('All settled:', results));
}

function demoPromiseAny() {
  Promise.any([ //One succeeding matters here. 
    fetch('https://jsonplaceholder.typicode.com/invalid-endpoint'),
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  ])
  .then(res => console.log('First success 🎉', res))
  .catch(err => console.error('All failed ❌', err));
}

// ------------------------------
// 3. Parallel Fetch with Partial Failures
// ------------------------------
async function fetchUserAndPosts() {
  const userFetch = fetch('https://jsonplaceholder.typicode.com/users/1');
  const postsFetch = fetch('https://jsonplaceholder.typicode.com/posts');

  const results = await Promise.allSettled([userFetch, postsFetch]);

  results.forEach((result, index) => {
    const label = index === 0 ? 'User' : 'Posts';

    if (result.status === 'fulfilled') {
      console.log(`${label} fetch succeeded ✅`, result.value);
    } else {
      console.error(`${label} fetch failed ❌`, result.reason);
    }
  });
}

// ------------------------------
// 4. AbortController Demo
// ------------------------------
let controller;
let timeoutId;

async function loadData() {
  controller = new AbortController();
  const signal = controller.signal;

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    controller.abort();
    console.log('Request aborted due to timeout ⏳');
  }, 5000);

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal });
    const data = await res.json();
    console.log('Data loaded:', data);
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Fetch was cancelled!');
    } else {
      console.error('Fetch failed:', err);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}
loadData();



// ------------------------------
// 5/ Rewrite day 17 using async/await. 
// ------------------------------

// Simulate user login
function loginUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: username });
        }, 1000);
    });
}

// Simulate fetching user profile
function fetchUserProfile(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: user.username, age: 24 });
        }, 2000);
    });
}

// Simulate fetching user posts
function fetchPosts(profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ posts: ["Placement", "Career Tips", "Motivation"] });
        }, 1000);
    });
}

// Async function to run the whole flow
async function getUsername(username) {
    try {
        const user = await loginUser(username);
        console.log("Fetched user:", user);

        const profile = await fetchUserProfile(user);
        console.log("User profile:", profile);

        const posts = await fetchPosts(profile);
        console.log("User's posts:", posts);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the function
getUsername("andras009");
