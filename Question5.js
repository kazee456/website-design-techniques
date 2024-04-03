//answer = place the code that depends on the result inside the callback funtion or in a function that is called from within the callback.

//example
function myFunction(callback) {
    setTimeout(function() {
        const result = 42; // This is the fetched data
        callback(result); // Call the callback function with the fetched data
    }, 1000); // delay of 1 sec
}

// Call the fetchData function
myFunction(function(result) {
    // This code is executed when the asynchronous operation is complete
    const processedResult = result * 2;
    console.log("Processed result:", processedResult);
});

console.log("Code outside the callback");