// Asynchronous function that computes factorial using MyAsyncAPI
async function computeFactorialAsync(num) {
  return new Promise((resolve, reject) => {
    // Create an instance of MyAsyncAPI
    const myAPI = new MyAsyncAPI();

    // Event listener to handle "done" event
    myAPI.addEventListener("done", () => {
      // Resolve the promise with the result
      resolve(myAPI.result);
    });

    // Event listener to handle "error" event
    myAPI.addEventListener("error", () => {
      // Reject the promise with an error message
      reject("Something went wrong");
    });

    // Initiate the asynchronous operation by computing the factorial
    myAPI.computeFactorial(num);
  });
}

// Example usage of the asynchronous function
computeFactorialAsync(5)
  .then(result => {
    console.log("Factorial:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
