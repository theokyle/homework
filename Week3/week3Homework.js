// 1. Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ["pepperoni", "mushrooms", "sausage", "peppers"];

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(toppings) {
  let message = "Welcome to Pizza House, our toppings are: ";
  for (let i = 0; i < toppings.length; i++) {
    if (i === toppings.length - 1) {
      message += `and ${toppings[i]}.`;
    } else {
      message += `${toppings[i]}, `;
    }
  }
  console.log(message);
}

// 3. Create a getPizzaOrder function that
//has the parameters size, crust, and an indefinite amount of toppings as inputs
//prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let message = `One ${size} ${crust} `;
  if (toppings.length === 0) {
    console.log(`${message} coming up!`);
    return;
  }
  message += "with ";

  for (let i = 0; i < toppings.length; i++) {
    let toppingsCheck = false;
    for (const pizzaTopping of pizzaToppings) {
      if (toppings[i] === pizzaTopping) {
        toppingsCheck = true;
      }
    }

    // I would actually use "if (pizzaToppings.includes(toppings[i]))"" here instead of the previous loop with toppingsCheck,
    // but didn't want to invoke array methods as per the instructions so used iteration instead.

    if (!toppingsCheck) {
      console.log("Sorry, we do not offer those toppings.");
      return;
    }

    if (i === toppings.length - 1) {
      message += `and ${toppings[i]}.`;
    } else {
      message += `${toppings[i]}, `;
    }
  }
  console.log(message);
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
    toppings: pizzaArray.slice(2)
  };
}

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObject) {
  let message = `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} pizza with `;
  for (let i = 0; i < pizzaObject.toppings.length; i++) {
    if (i === pizzaObject.toppings.length - 1) {
      message += `and ${pizzaObject.toppings[i]}.`;
    } else {
      message += `${pizzaObject.toppings[i]}, `;
    }
  }
  console.log(message);
  return pizzaObject;
}

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// 2. greetCustomer function
greetCustomer(pizzaToppings);
// 3a. getPizzaOrder with no toppings
getPizzaOrder("large", "thick crust");
// 3b. getPizzaOrder with toppings at Pizza Place
getPizzaOrder("large", "thick crust", "pepperoni", "mushrooms", "peppers");
// 3c. getPizzaOrder with a topping NOT at pizza place:
getPizzaOrder("large", "thick crust", "pepperoni", "mushrooms", "onion");
// 4. Prepare Pizza
const pizzaObj = preparePizza([
  "small",
  "thin crust",
  "chicken",
  "onion",
  "bbq sauce"
]);
// 5. Serve Pizza
servePizza(pizzaObj);
