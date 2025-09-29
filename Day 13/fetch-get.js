// Learn: GET requests basics, the most basic stuff.
// --------------------------------------
// - fetch(url) makes a GET request
// - response.json() parses the JSON
// - response.ok and response.status handle status codes.

async function fetchGetExample() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log("GET result:", data);
  } catch (err) {
    console.error("GET failed:", err.message);
  }
}

fetchGetExample();
