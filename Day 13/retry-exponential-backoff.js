// Learn: Retry with exponential backoff
// --------------------------------------
// - Retry when status = 429 or 5xx
// - Delay doubles after each attempt
// - Stops after maxRetries

async function fetchWithRetry(url) {
  let maxTries = 3;         // 🔁 total tries
  let delay = 1000;         // ⏱️ start with 1 second wait

  for (let attempt = 1; attempt <= maxTries; attempt++) {
    console.log(`Attempt ${attempt}...`);

    try {
      const response = await fetch(url);

      // ✅ If response is okay, success — parse + return
      if (response.ok) {
        const data = await response.json();
        console.log("✅ Success! Data received:");
        console.log(data);
        return data;
      }

      // 🚫 If not OK (like 500, 404, etc.), throw error to retry
      throw new Error(`Server responded with ${response.status}`);

    } catch (error) {
      console.warn(`❌ Attempt ${attempt} failed. Reason: ${error.message}`);

      // ⏳ Only wait if we still have attempts left
      if (attempt < maxTries) {
        console.log(`⏸️ Waiting ${delay / 1000} seconds before retrying...`);
        await new Promise(res => setTimeout(res, delay));

        // ⏫ Increase delay (Exponential backoff)
        delay *= 2;
      } else {
        console.error("💀 All attempts failed. Giving up.");
      }
    }
  }
}

// 🧪 Try hitting a fake endpoint that fails
fetchWithRetry("https://jsonplaceholder.typicode.com/invalid-endpoint");
