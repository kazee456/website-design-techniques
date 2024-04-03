//create an object of the API
const request = new XMLHttpRequest();
//Attatch 4 Event listeners

request.addEventListener("loadstart", () => {
  console.log("The asynchronous function has begun executing");
});//Triggered when the request starts.

request.addEventListener("load", () => {
  const data = request.responseText;
  console.log(data);
  console.log("Done executing");
});//Triggered when the request completes successfully.

request.addEventListener("error", () => {
  console.log("Something went wrong!!");
});//Triggered if the request encounters an error.

request.addEventListener("loadend", () => {
  console.log("The asynchronous function has finished executing");
});// Triggered when the request finishes, regardless of success or failure.

// request.open("GET", "https://restcountries.eu/rest/v2/name/portugal");
request.open("GET", "https://swapi.dev/api");//method is used to initialize the request

request.send();// sends request to the server