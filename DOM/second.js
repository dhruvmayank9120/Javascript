// // ---------------- CART ----------------
// const cart = ["pizza", "coke", "sandwich"];

// // ---------------- PLACE ORDER ----------------
// function placeOrder(cart, callback) {
//   console.log("Talking with Domino's...");

//   setTimeout(() => {
//     console.log("Order Placed Successfully");

//     const order = {
//       orderId: 221,
//       food: cart,
//       restaurant: "Domino's",
//       location: "Dwarka",
//     };

//     callback(order);
//   }, 2000);
// }

// // ---------------- PREPARE ORDER ----------------
// function preparingOrder(order, callback) {
//   console.log("Pizza preparation started...");

//   setTimeout(() => {
//     console.log("Pizza preparation Done");

//     const foodDetails = {
//       token: 12,
//       restaurant: order.restaurant,
//       location: order.location,
//     };

//     callback(foodDetails);
//   }, 5000);
// }

// // ---------------- PICKUP ORDER ----------------
// function pickupOrder(foodDetails, callback) {
//   console.log(
//     `Reaching ${foodDetails.restaurant} at ${foodDetails.location} to pick order`,
//   );

//   setTimeout(() => {
//     console.log("Order picked up by Delivery Boy");
//     const dropLocation = foodDetails.location;
//     callback();
//   }, 3000);
// }

// // ---------------- DELIVER ORDER ----------------
// function deliverOrder(dropLocation) {
//   console.log("Delivery boy on the way");

//   setTimeout(() => {
//     console.log("Order Delivered successfully 🍕");
//   }, 5000);
// }

// // ---------------- CALLBACK HELL ----------------
// placeOrder((order) => {
//   preparingOrder(order, (foodDetails) => {
//     pickupOrder(foodDetails, (dropLocation) => {
//       deliverOrder(dropLocation);
//     });
//   });
// });

// ---------------- CART ----------------
const cart = ["pizza", "coke", "sandwich"];

// ---------------- PLACE ORDER ----------------
function placeOrder(cart) {
  console.log("Talking with Domino's...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foodAvailable = true;

      if (!foodAvailable) {
        reject("Food not available");
        return;
      }

      console.log("Order Placed Successfully");

      resolve({
        orderId: 221,
        food: cart,
        restaurant: "Domino's",
        location: "Dwarka",
      });
    }, 2000);
  });
}

// ---------------- PREPARE ORDER ----------------
function preparingOrder(order) {
  console.log("Pizza preparation started...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pizza preparation Done");

      resolve({
        token: 12,
        restaurant: order.restaurant,
        location: order.location,
      });
    }, 5000);
  });
}

// ---------------- PICKUP ORDER ----------------
function pickupOrder(foodDetails) {
  console.log(
    `Reaching ${foodDetails.restaurant} at ${foodDetails.location} to pick order`,
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order picked up by Delivery Boy");
      resolve(foodDetails.location);
    }, 3000);
  });
}

// ---------------- DELIVER ORDER ----------------
function deliverOrder(dropLocation) {
  console.log("Delivery boy on the way");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order Delivered successfully at ${dropLocation} 🍕`);
      resolve();
    }, 5000);
  });
}

// ---------------- PROMISE CHAIN ----------------
placeOrder(cart)
  .then(preparingOrder)
  .then(pickupOrder)
  .then(deliverOrder)
  .catch((error) => console.log("Something went wrong:", error));

// const pr = new Promise(function (resolve, reject) {})

// return pr;
