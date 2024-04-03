// Define a class MyAsyncAPI that extends EventTarget
class MyAsyncAPI extends EventTarget {
  result;

  // Define a recursive factorial function
  factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * this.factorial(n - 1);
  }

  // Method to compute factorial asynchronously with a delay of 3000 milliseconds
  computeFactorial(num) {
    // Check if the input is negative, dispatch "error" event if true
    if (num < 0) {
      const myEvent = new Event("error");
      this.dispatchEvent(myEvent);
      return;
    }

    // Asynchronous operation using setTimeout
    setTimeout(() => {
      // Calculate the factorial and store the result
      this.result = this.factorial(num);

      // Dispatch "done" event to signal completion
      const myEvent = new Event("done");
      this.dispatchEvent(myEvent);
    }, 3000);
  }
}

// Function that uses the MyAsyncAPI to perform an asynchronous operation
function myAsyncFunction(num, callback) {
  // Create an instance of MyAsyncAPI
  const myAPI = new MyAsyncAPI();

  // Event listeners to handle "error" and "done" events
  myAPI.addEventListener("error", () => {
    // Callback with an error message if an error event occurs
    callback("Something went wrong", null);
    // Alternatively, you can log the error message
    // console.log("Something went wrong!!");
  });

  myAPI.addEventListener("done", () => {
    // Callback with the result if the operation is successful
    callback(null, myAPI.result);
    // Alternatively, you can log a success message
    // console.log("Done executing!!");
  });

  // Initiate the asynchronous operation by computing the factorial
  myAPI.computeFactorial(num);
}
//Question 8
// Call myAsyncFunction with an example input (5) and provide a callback function
myAsyncFunction(5, (error, data) => {
  // Callback function to handle the result or error
  if (error) {
    console.log(error); // Log the error message
  } else {
    console.log(data);  // Log the result
  }
});
