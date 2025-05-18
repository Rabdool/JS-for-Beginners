// ASYNC / AWAIT

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

getData();
