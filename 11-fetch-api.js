// FETCH API

// Make sure to run this in a browser environment
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log("Fetched post:", data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
