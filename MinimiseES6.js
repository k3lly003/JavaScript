/*Boolean Casting*/
// Create an input element
const input = document.createElement("input");
input.type = "text";
input.id = "input";

// Add the input element to the document body (you can append it to any desired element)
document.body.appendChild(input);

// Set a value for the input field
input.value = "Hello"; // Change this value to test different scenarios

// Using the provided code snippets:
const age = Boolean(input.value);
const Age = !!input.value;

console.log("Using Boolean():", age); // Output: true or false
console.log("Using !! operator:", Age); // Output: true or false
/*Nullish Coalescing*/
/*Returning its right-hand side when its left hand side operand is null or undefined*/
/*OLD*/
const addIdentity = (user, id) => {
  user.id = id !== null && id !== undefined ? id : "Unknown";
};

const addId = (user, id) => {
  user.id = id ?? "Unknown";
  return user;
};
