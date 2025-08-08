// 1. Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["pepperoni", "mushrooms", "sausage", "peppers"];

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(toppings) {
  console.log(
    `Welcome to Pizza House, our toppings are: ${listToppings(toppings)}`
  );
}

function listToppings(toppings) {
  let toppingsString = "";

  // Included this statement to catch a situation where there shouldn't be a comma.
  if (toppings.length === 2) {
    return `${toppings[0]} and ${toppings[1]}`;
  }

  for (let i = 0; i < toppings.length; i++) {
    // Check if the topping is at the pizza place
    if (!pizzaToppings.includes(toppings[i])) {
      return "Sorry, we do not offer those toppings. Please try and order again.";
    }

    // Check if it is the last topping in the list
    if (i === toppings.length - 1) {
      toppingsString += `and ${toppings[i]}.`;
    } else {
      toppingsString += `${toppings[i]}, `;
    }
  }

  return toppingsString;
}

// 3. Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let message = `One ${size} ${crust}`;
  if (toppings.length === 0) {
    console.log(`${message} coming up!`);
    return;
  }
  const toppingsString = listToppings(toppings);

  if (toppingsString.includes("Sorry")) {
    console.log(toppingsString);
  } else {
    console.log(`${message} with ${toppingsString} Coming up!`);
  }
  return [size, crust, toppings];
}

// 4. Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(pizzaArray) {
  console.log("...Cooking Pizza...");
  return {
    size: pizzaArray[0],
    crust: pizzaArray[1],
    toppings: pizzaArray[2]
  };
}

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObject) {
  let message = `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza`;
  // Check if there are no toppings
  if (pizzaObject.toppings.length === 0) {
    console.log(message + ".");
  } else {
    const toppingsString = listToppings(pizzaObject.toppings);
    if (toppingsString.includes("Sorry")) {
      console.log(toppingsString);
    } else {
      console.log(message + toppingsString);
    }
  }
  return pizzaObject;
}

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input

// 2. greetCustomer function
greetCustomer(pizzaToppings);
// 3a. getPizzaOrder with no toppings
getPizzaOrder("large", "thick crust");
// 3b. getPizzaOrder with a topping NOT at pizza place:
getPizzaOrder("large", "thick crust", "pepperoni", "mushrooms", "onion");
// 3c. getPizzaOrder with toppings at Pizza Place
const pizzaOrder = getPizzaOrder(
  "large",
  "thick crust",
  "pepperoni",
  "mushrooms",
  "peppers"
);
// 4. Prepare Pizza
const preparedPizza = preparePizza(pizzaOrder);
// 5. Serve Pizza
servePizza(preparedPizza);
