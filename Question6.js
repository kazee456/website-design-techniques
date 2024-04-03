// Function to perform an asynchronous operation using XMLHttpRequest
function myAsyncFunc(url, callback) {
  // Create a new XMLHttpRequest object
  const request = new XMLHttpRequest();

  // Event listeners to handle different stages of the asynchronous operation
  request.addEventListener("loadstart", () => {
    const response = "Execution has begun";
    callback(response);
  });

  request.addEventListener("load", () => {
    const response = request.responseText;
    callback(response);
  });

  request.addEventListener("error", () => {
    const response = "Something went wrong";
    callback(response);
  });

  request.addEventListener("loadend", () => {
    const response = "The asynchronous function has finished executing";
    callback(response);
  });

  // Open the XMLHttpRequest with the specified URL
  // (Note: The URL is passed as a parameter to the function)
  request.open("GET", `${url}`);

  // Send the XMLHttpRequest to the server
  request.send();
}

// Callback function to handle the response after the asynchronous operation
function doneExecuting(someText) {
  console.log(someText);
}

// Call myAsyncFunc with a URL and the doneExecuting callback function
myAsyncFunc("https://swapi.dev/api", doneExecuting);
//This initiates the asynchronous operation, and the callback function will be invoked with different responses based on the events triggered during the operation.