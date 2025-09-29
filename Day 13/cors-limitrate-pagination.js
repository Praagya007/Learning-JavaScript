// ============================================
// Learn: CORS, Rate Limits, and Pagination
// ============================================

// Key Concepts:
// 1. CORS: Cross-Origin Resource Sharing; prevents unauthorized sites from fetching your API.
// 2. Rate Limit: Limits number of requests; check headers like X-RateLimit-Remaining.
// 3. Pagination: Split data into pages using _page and _limit (common in REST APIs).

// Example: Pagination
async function fetchPaginatedPosts(page = 1, limit = 10) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    const response = await fetch(url);

    // Response headers (e.g., total count for pagination)
    const totalPosts = response.headers.get("x-total-count");
    console.log(`Total posts available: ${totalPosts}`);

    // Pagination data
    const data = await response.json();
    console.log(`Page ${page} data:`, data);

  } catch (error) {
    console.error("Pagination fetch failed:", error.message);
  }
}

// Example: Rate Limit (GitHub API demo)
async function fetchWithRateLimitDemo() {
  try {
    const response = await fetch("https://api.github.com/users/octocat");

    const remaining = response.headers.get("X-RateLimit-Remaining");
    const reset = response.headers.get("X-RateLimit-Reset");

    console.log(`Rate limit remaining: ${remaining}`);
    if (remaining === "0") {
      const resetTime = new Date(reset * 1000).toLocaleTimeString();
      console.warn(`🚨 Rate limit reached! Resets at ${resetTime}`);
    }

    if (!response.ok) {
      const data = await response.json();
      console.error("API error:", data.message);
      return;
    }

    const data = await response.json();
    console.log("Fetched user:", data);

  } catch (error) {
    console.error("Rate limit demo failed:", error.message);
  }
}

// Run examples
fetchPaginatedPosts(1, 10);
fetchWithRateLimitDemo();
