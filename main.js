// const request = new XMLHttpRequest();

// request.addEventListener("loadstart", () => {
//   console.log("The asynchronous function has begun executing");
// });

// request.addEventListener("load", () => {
//   const data = request.responseText;
//   console.log(data);
//   console.log("Done executing");
// });

// request.addEventListener("error", () => {
//   console.log("Something went wrong!!");
// });

// request.addEventListener("loadend", () => {
//   console.log("The asynchronous function has finished executing");
// });

// // request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
// request.open("GET", "https://swapi.dev/api");

// request.send();

// Question 2:
// Dispatch

// Question 3:
// async, await, setTimeOut(), fetch(), Promise,

// Question 6:
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////

// function myAsyncFunc(url, callback) {
//   const request = new XMLHttpRequest();

//   request.addEventListener("loadstart", () => {
//     const response = "Execution has began";
//     callback(response);
//   });

//   request.addEventListener("load", () => {
//     const response = request.responseText;
//     callback(response);
//   });

//   request.addEventListener("error", () => {
//     const response = "Something went wrong";
//     callback(response);
//   });

//   request.addEventListener("loadend", () => {
//     const response = "The asynchronous function has finished executing";
//     callback(response);
//   });

//   // request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
//   request.open("GET", `${url}`);

//   request.send();
// }

// function doneExecuting(someText) {
//   console.log(someText);
// }

// myAsyncFunc("https://swapi.dev/api", doneExecuting);

// Question 7:
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////

// class MyAsyncAPI extends EventTarget {
//   result;

//   factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     else return n * this.factorial(n - 1);
//   }

//   computeFactorial(num) {
//     if (num < 0) {
//       const myEvent = new Event("error");
//       this.dispatchEvent(myEvent);
//       return;
//     }

//     setTimeout(() => {
//       this.result = this.factorial(num);
//       const myEvent = new Event("done");
//       this.dispatchEvent(myEvent);
//     }, 3000);
//   }
// }

// function myAsyncFunction(num, callback) {
//   const myAPI = new MyAsyncAPI();

//   myAPI.addEventListener("error", () => {
//     callback("Something went wrong", null);
//     // console.log("Something went wrong!!");
//   });

//   myAPI.addEventListener("done", () => {
//     callback(null, myAPI.result);
//     // console.log("Done executing!!");
//   });

//   myAPI.computeFactorial(num);
// }

// myAsyncFunction(5, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// Question 8:
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////
/////////////////////////
// function printResult() {
//   myAPI.computeFactorial(12, doneExecuting);
// }

// printResult();

class MyAsyncAPI extends EventTarget {
  result;

  factorial(n) {
    if (n === 0 || n === 1) return 1;
    else return n * this.factorial(n - 1);
  }

  computeFactorial(num) {
    if (num < 0) {
      const myEvent = new Event("error");
      this.dispatchEvent(myEvent);
      return;
    }

    setTimeout(() => {
      this.result = this.factorial(num);
      const myEvent = new Event("done");
      this.dispatchEvent(myEvent);
    }, 3000);
  }
}

function myAsyncFunction(num, callback) {
  const myAPI = new MyAsyncAPI();

  myAPI.addEventListener("error", () => {
    callback("Something went wrong", null);
    // console.log("Something went wrong!!");
  });

  myAPI.addEventListener("done", () => {
    callback(null, myAPI.result);
    // console.log("Done executing!!");
  });

  myAPI.computeFactorial(num);
}

// Results in pyramid of doom(callback hell)
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
