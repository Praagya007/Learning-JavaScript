// Learn: POST, PUT, DELETE
// --------------------------------------
// - POST: create new resource
// - PUT: replace resource
// - DELETE: remove resource

async function fetchPostExample() {
  const payload = { title: "foo", body: "bar", userId: 1 };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("POST result:", data);
}

async function fetchPutExample() {
  const payload = { title: "updated", body: "updated", userId: 1 };
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log("PUT result:", data);
}

async function fetchDeleteExample() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  console.log("DELETE status:", response.status); // 200 or 204
}

fetchPostExample();
fetchPutExample();
fetchDeleteExample();
