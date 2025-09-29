// ============================================
// Learn: Headers, JSON, and Status Codes
// ============================================

// Key Concepts:
// 1. Headers: Metadata about the request/response (like Content-Type, Authorization, Accept)
// 2. Body: The main content (usually JSON)
// 3. Status codes: Indicate result (200 OK, 404 Not Found, 500 Server Error)
// 4. JSON.stringify / JSON.parse: Ensure data is properly sent and read by client/server

async function fetchWithHeaders() {
  try {
    // Sending a POST request with headers and JSON body
    const payload = { title: "foo", body: "bar", userId: 1 };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // tells server we are sending JSON
        "Accept": "application/json",       // tells server we expect JSON back
        "Authorization": "Bearer TOKEN"     // optional auth header
      },
      body: JSON.stringify(payload) // convert JS object to JSON string
    });

    // Status checks
    console.log("Response status:", response.status); // 201 for created
    console.log("Is OK?", response.ok);               // true if status 200–299

    // Reading JSON response
    const data = await response.json();
    console.log("Response data:", data);

  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

// Run the example
fetchWithHeaders();
