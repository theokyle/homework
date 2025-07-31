let pizzaPlace = "Nothing but Provel";
let numberOfToppings = 15;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `Welcome to "${pizzaPlace}"! We have ${numberOfToppings} toppings to choose from.`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (let i = 0; i < numberOfToppings; i += 2) {
  console.log(i);
}
