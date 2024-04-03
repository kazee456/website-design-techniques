// Define a class MyAsyncAPI that extends EventTarget
class MyAsyncAPI extends EventTarget {
  result;

  // Recursive factorial function
  factorial(n) {
      if (n === 0 || n === 1) return 1;
      else return n * this.factorial(n - 1);
  }

  // Asynchronous method to compute factorial with a delay of 3000 milliseconds
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
  });

  myAPI.addEventListener("done", () => {
      // Callback with the result if the operation is successful
      callback(null, myAPI.result);
  });

  // Initiate the asynchronous operation by computing the factorial
  myAPI.computeFactorial(num);
}

// Nested callbacks creating a pyramid of doom (callback hell)
myAsyncFunction(5, (error, data) => {
  if (error) {
      console.log(error);
  } else {
      console.log(data);

      myAsyncFunction(8, (error, data) => {
          if (error) {
              console.log(error);
          } else {
              console.log(data);

              myAsyncFunction(9, (error, data) => {
                  if (error) {
                      console.log(error);
                  } else {
                      console.log(data);

                      myAsyncFunction(12, (error, data) => {
                          if (error) {
                              console.log(error);
                          } else {
                              console.log(data);
                          }
                      });
                  }
              });
          }
      });
  }
});
