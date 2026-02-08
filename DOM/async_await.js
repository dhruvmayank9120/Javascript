// ---------------- CART ----------------
// const cart = ["pizza", "coke", "sandwich"];

// // ---------------- PLACE ORDER ----------------
// function placeOrder(cart) {
//   console.log("Talking with Domino's...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const foodAvailable = true;

//       if (!foodAvailable) {
//         reject("Food not available");
//         return;
//       }

//       console.log("Order Placed Successfully");

//       resolve({
//         orderId: 221,
//         food: cart,
//         restaurant: "Domino's",
//         location: "Dwarka",
//       });
//     }, 2000);
//   });
// }

// // ---------------- PREPARE ORDER ----------------
// function preparingOrder(order) {
//   console.log("Pizza preparation started...");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Pizza preparation Done");

//       resolve({
//         token: 12,
//         restaurant: order.restaurant,
//         location: order.location,
//       });
//     }, 5000);
//   });
// }

// // ---------------- PICKUP ORDER ----------------
// function pickupOrder(foodDetails) {
//   console.log(
//     `Reaching ${foodDetails.restaurant} at ${foodDetails.location} to pick order`,
//   );

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Order picked up by Delivery Boy");
//       resolve(foodDetails.location);
//     }, 3000);
//   });
// }

// // ---------------- DELIVER ORDER ----------------
// function deliverOrder(dropLocation) {
//   console.log("Delivery boy on the way");

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Order Delivered successfully at ${dropLocation} 🍕`);
//       resolve();
//     }, 5000);
//   });
// }

// //await: it means wait for the promise to resolve and then return the result. It can only be used inside an async function. It makes the code look synchronous and easier to read.

// async function greet() {
//   const order = await placeOrder(cart);
//   const foodDetails = await preparingOrder(order);
//   const dropLocation = await pickupOrder(foodDetails);
//   await deliverOrder(dropLocation);
// }
// greet();
// ---------------- PROMISE CHAIN ----------------
// placeOrder(cart)
//   .then(preparingOrder)
//   .then(pickupOrder)
//   .then(deliverOrder)
//   .catch((error) => console.log("Something went wrong:", error));

function test1() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first promise resolved");
    }, 5000);
  });

  return p1;
}

function test2() {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promise resolved");
    }, 5000);
  });

  return p2;
}

// p1.then((value) => console.log(value));
// p2.then((value) => console.log(value));

//2nd promise resolved first then 1st promise resolved because 2nd promise has less time to resolve than 1st promise. So, the output will be:
// second promise resolved
// first promise resolved

// p1.then((response) => console.log(response));

//-> Using async/await

async function greet() {
  const data1 = await test1();
  console.log(data1);

  const data2 = await test2();
  console.log(data2);
}

// greet();

//-> async function always returns a promise. If we return a value from an async function, it will be wrapped in a promise. If we throw an error from an async function, it will be rejected with that error.

async function meet() {
  return "Hello Coder";
}
meet().then((value) => console.log(value));
