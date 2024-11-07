#How to handle asynchronous operations using async/await over callback/promise TypeScript.

We often use aynchronous operation like fetching data from API. We use asyncronous operation because it is readablity, avoid callback and easy to error handling

### Why Use async/await?

1. **Readability**: `async/await` makes asynchronous code look more like synchronous code, improving readability.
2. **Avoid Callback Hell**: Traditional callbacks can lead to nested and unreadable code. `async/await` simplifies this and avoids deeply nested callbacks.
3. \*_Error Handling_

### Example: Using async/await

```typescript
// Simulate a function that fetches data asynchronously
const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url);  // Wait for the fetch to complete
  const data = await response.text(); // Wait for the response text
  return data; // Return the data
};

// Using async/await in an async function
const getData = async () => {
  try {
    const result = await fetchData("https://example.com");
    console.log(result); // Log the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();


-Here fetch Data is a Asynchronous function that fetches data from a given in URL. We use wait to pause the function until the promise resolves
and The getData function we use because await call the fetchdata and waits for the data. If  anything goes wrong it catches the error with try/catch
By using async/await we can simplify asynchronous code in typscript. So it is easy to write, understand and maintain. it is a great way replace callback function.
```
