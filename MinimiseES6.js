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
