//Question 12
//Pending: This is the initial state where the Promise starts. It indicates that the asynchronous operation associated with the Promise has not yet been completed.

//Fulfilled (Resolved): This state signifies that the asynchronous operation has been completed successfully. It provides a resolved value, which is the result of the operation. Once fulfilled, a Promise remains in this state and cannot transition to any other state.

//Rejected: If the asynchronous operation encounters an error or fails to complete, the Promise is rejected. It holds a reason for rejection, indicating the cause of the failure. Once rejected, a Promise remains in this state and cannot change its state further.

//Question 13

//To access the final value of a Promise, you can use the .then() method or the await keyword in an async function:

//Question 14
//Apart from the result, a Promise has another property called status, which represents the current state of the Promise. The status property indicates whether the Promise is pending, fulfilled, or rejected.

//Question 15
// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(url)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Process the retrieved data
    console.log('Data retrieved:', data);
    // Perform further operations with the data
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Fetch error:', error);
  });

  //Question 16
  //we can start executing another function without nesting it within the previous one, thanks to the chaining mechanism provided by promises.
  //Promises have three states: pending, fulfilled, and rejected. They support method chaining, enabling sequential execution of asynchronous tasks without nesting callbacks. This chaining mechanism promotes cleaner and more readable code, avoiding the "pyramid of doom" structure. Promises also provide built-in error handling through the .catch() method, making it easier to manage and propagate errors in asynchronous code. 

//---------------------------------EX 17---------------------------------
// Define an asynchronous function myAsyncFunction that takes a number as input
function myAsyncFunction(number) {
    // Instantiate the MyAsyncClass to use its asynchronous methods
    const object = new MyAsyncClass();
    // Call the asynchronous method asyncComputeFactorial with the given number
    object.asyncComputeFactorial(number);
  
    // Return a promise object
    return new Promise((resolve, reject) => {
      // Listen for the factorial event to resolve the promise with the result
      object.addEventListener("factorial", () => {
        resolve(object.factorialResult);
      });
      // Listen for the error event to reject the promise with the error message
      object.addEventListener("error", e => {
        reject(e.detail);
      });
    });
  }
  
  // Usage of the asynchronous function
  myAsyncFunction(5)
    .then(result => console.log(`The factorial of 5 is ${result}`)) // Handle resolved promise
    .catch(error => console.error(error)); // Handle rejected promise
  
//---------------------------------EX 18---------------------------------
// calling my async function with promise chaining
// Chain of promise resolutions to compute factorials sequentially for different numbers
myAsyncFunction(1) // Compute factorial of 1
  .then(result => { // Resolve the promise and handle the result
    console.log("FULFILLED STATE 1: ", `Factorial of 1 is ${result}`);
    // Return a new promise for computing factorial of 2
    return myAsyncFunction(2);
  })
  .then(result => { // Resolve the promise and handle the result
    console.log("FULFILLED STATE 2: ", `Factorial of 2 is ${result}`);
    // Return a new promise for computing factorial of 3
    return myAsyncFunction(3);
  })
  .then(result => { // Resolve the promise and handle the result
    console.log("FULFILLED STATE 3: ", `Factorial of 3 is ${result}`);
    // Return a new promise for computing factorial of 4
    return myAsyncFunction(4);
  })
  .then(result => console.log("FULFILLED STATE 4: ", `Factorial of 4 is ${result}`)) // Resolve the promise and handle the result
  .catch(error => console.error("REJECTED STATE: ", error)); // Handle any error during the promise chain
