//asynchronous programming: it allows you to perform tasks that may take some time to complete, such as fetching data from an API, without blocking the main thread of execution. This is achieved using promises, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
//fetch: it is a built-in JavaScript function that allows you to make HTTP requests to retrieve data from a server. It returns a promise that resolves to the response of the request. You can use fetch to get data from APIs, submit forms, or perform any other network-related tasks.
//promise: aasan shabdo mein, ek promise ek aisa object hai jo future mein kisi asynchronous operation ke result ko represent karta hai. Jab aap fetch function ka use karte hain, to wo ek promise return karta hai jo eventually resolve hoga jab HTTP request complete ho jayegi. Aap .then() method ka use karke is promise ke resolved value ko access kar sakte hain, ya .catch() method ka use karke kisi bhi error ko handle kar sakte hain jo asynchronous operation ke dauran ho sakta hai.
// const Promises = fetch(
//   `http://api.weatherapi.com/v1/current.json?key=d5fe5c28361f44f7a80231808260702&q=London&aqi=yes`,
// );

// const pro2 = Promises.then((response) => {
//   // const pro2 = response.json();
//   //   pro2.then((data) => {
//   //     console.log(data); // This line is used to log the parsed JSON data to the console. Once the promise returned by response.json() resolves, it will contain the actual data from the API in a JavaScript object format. By logging this data, you can see the structure and content of the response, which may include information such as temperature, humidity, weather conditions, and other relevant details about the current weather in London.
//   //   });

//   return response.json(); // This line is used to parse the response from the fetch request as JSON. The response.json() method returns a promise that resolves to the parsed JSON data. By returning this promise, you can chain another .then() method to handle the parsed data once it is available. This allows you to work with the actual data returned by the API in a structured format, making it easier to access specific properties and values within the response.
// });
// pro2.then((data) => {
//   console.log(data); // This line is used to log the parsed JSON data to the console. Once the promise returned by response.json() resolves, it will contain the actual data from the API in a JavaScript object format. By logging this data, you can see the structure and content of the response, which may include information such as temperature, humidity, weather conditions, and other relevant details about the current weather in London.
// });

// Promises.then((repsonse) => {
//   return repsonse.json();
// }).then((data) => {
//   console.log(data); // This line is used to log the parsed JSON data to the console. Once the promise returned by response.json() resolves, it will contain the actual data from the API in a JavaScript object format. By logging this data, you can see the structure and content of the response, which may include information such as temperature, humidity, weather conditions, and other relevant details about the current weather in London.
// }); //also known as promise chaining, allows you to handle multiple asynchronous operations in a sequential manner. In this example, the first .then() method is used to parse the response from the fetch request as JSON, and it returns a new promise that resolves to the parsed data. The second .then() method is then used to log the parsed data to the console once it is available. This approach helps to keep the code organized and makes it easier to handle complex asynchronous workflows without nesting multiple callbacks.

//more shortcut
// Promises.then((response) => response.json()).then((data) => console.log(data)); // This is a more concise way to achieve the same result as the previous example. Instead of using a block of code with curly braces and an explicit return statement, we can directly return the result of response.json() in the first .then() method. This allows us to chain the second .then() method immediately after, which logs the parsed data to the console. This approach is often preferred for its brevity and readability when dealing with simple operations in promise chaining.

//->other way to handle promise

fetch(
  `http://api.weatherapi.com/v1/current.json?key=d5fe5c28361f44f7a80231808260702&q=London&aqi=yes`,
)
  .then((response) => response.json())
  .then((data) => console.log(data.current.temp_c))
  .catch((error) => console.log(error)); // This code snippet demonstrates how to handle a promise returned by the fetch function. The first .then() method is used to parse the response as JSON, and the second .then() method logs the parsed data to the console. Additionally, a .catch() method is chained at the end to handle any errors that may occur during the fetch operation or while processing the response. If an error occurs, it will be caught and logged to the console, allowing you to handle it appropriately in your application.

// setTimeout(() => {
//   console.log(obj); // Promise { <pending> }
// }, 2000); // The setTimeout function is used here to delay the logging of the obj variable for 2 seconds. This allows time for the fetch operation to complete and the promise to resolve. However, since the fetch operation is asynchronous, the obj variable will still be a pending promise when it is logged, which is why it shows as Promise { <pending> }. To handle the resolved value of the promise, you would typically use .then() to process the response once it is available.
// console.log(obj); // Promise { <pending> }: means that the promise is still pending and has not yet been resolved or rejected. The fetch function returns a promise that will eventually resolve to the response of the HTTP request. To handle the response, you can use the .then() method to process the resolved value or .catch() to handle any errors that may occur during the fetch operation.

// Promises.then((response) => {
//   console.log(response); // Response {type: 'cors', url: 'http://api.weatherapi.com/v1/current.json?key=d5fe5c28361f44f7a80231808260702&q=London&aqi=yes', redirected: false, status: 200, ok: true, …} this response object contains information about the HTTP response, such as the status code, headers, and the body of the response. To access the actual data returned by the API, you would typically call a method like .json() on the response object to parse the JSON data from the response body.
// }).catch((error) => {
//   console.log(error); // This catch block is used to handle any errors that may occur during the fetch operation. If there is an issue with the network request, such as a failed connection or an invalid URL, the promise will be rejected, and the error will be caught in this block. The error object will contain information about what went wrong, allowing you to handle it appropriately, such as displaying an error message to the user or logging it for debugging purposes.
// });

//Promises.then means when value will come in promise then do this work. It is used to handle the resolved value of a promise. When the promise is resolved, the function passed to .then() will be executed with the resolved value as its argument. In this case, when the fetch operation completes and the response is available, the function inside .then() will log the response object to the console.
// pending, solving,rejected: these are the three states of a promise. When a promise is created, it is in the pending state, meaning that the asynchronous operation has not yet completed. If the operation completes successfully, the promise transitions to the resolved (or fulfilled) state, and if it encounters an error, it transitions to the rejected state. You can handle these states using .then() for resolved values and .catch() for errors.
