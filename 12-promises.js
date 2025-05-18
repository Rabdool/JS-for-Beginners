// PROMISES

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting"), ms);
  });
}

wait(1000).then(message => console.log(message)); // After 1s: Done waiting
