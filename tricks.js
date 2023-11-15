/*Preventing User from pasting*/

Input.addEventListener("paste", (e) => {
  e.preventDefault();
});

/*Use Window.print() Javascript Method to print the content of current page*/
<button onClick="window.print()">Print</button>;

let a = [1, 5, 42, 56, 77];

let solution = a.sort((a, b) => b - a);
console.log(solution);
Map.set();
/*const fruits =new.Map([
  ['🍉', 100],
  ['🍌', 50],
  ['🥭',250],
  ['🍏',apple],
  ['🍋',lemon],
]);*/
const wallet = {
  Balance: 5000,
};
const menu = {
  pizza: {
    price: 1000,
  },
  chiz: {
    price: 2000,
  },
};
function leti() {
  if (menu.pizza.money == 100) {
    Balance - menu.pizza.money;
    console.log("🍕");
  } else if (menu.chiz.money == 2000) {
    Balance - menu.chiz.money;
    console.log("🍟");
  } else {
    console.log("Bro u broke 😂");
  }
}
let sellerOutPut = setTimeout(leti, 600);
/*Cloning/copying an object with '{ ...objName }' and 'Object.assign({}, objName)'*/
var car = {
  name: "benz",
  mode: "aws",
};
const carCopy = { ...car }; /*{ ...objName }*/
const carCopy2 = Object.assign({}, car); /*Object.assign({}, objName)*/
console.log(carCopy);
console.log(carCopy2);
/*Geting object values using Object.values(objName)*/
const vehicle = {
  make: "Toyota",
  model: "camry",
};
console.log(Object.values(vehicle));
/*example of Function and object as the first class citizens
FCC(first class citizens): you can assign them to a valiable, pass as argument, return from other function
*/
function sayHello() {
  return "hello world";
}
let grettings = sayHello; /*Assign to a valiable*/
console.log(grettings); /*Passing them as argument*/
/*Return from other functions*/
var obj3 = {
  nana: "12 years",
  keke: "5 years",
};
let age = obj3; /*Assign to a valiable*/
console.log(age); /*Passing them as parameter*/

/*Object can store functions as properties,these function
are typically called methods when associated with Objects.*/
/*Within an object method, this refers to the object that the
method belongs to.However, the value of This can change depending
 on the context in which a function is called*/
const pipo = {
  name: "Yohana",
  greet: function () {
    console.log("Hello" + this.name + "!");
  },
};
pipo.greet(); // Hello Yohana!

let insta = { click };
let fb = {
  on,
};
let both = { ...insta, ...fb };
/*Three dimension array*/
var threeDim = [[[]]];

/*new operator*/
/*new operator is used to construct a user defined object from a function*/
/*The this inside the function is set to the THIS will be added as a property to this object*/
/*If we explicity return  something inside the function, then the THIS binding will be ignored and
and an empty object will be assigned to the caller variable*/

function developer(salary, role) {
  this.salary = salary; // this refers to newly created object here
  this.role = role;
}
var employee = new developer("$450,000", "SeniorWebDev");
console.log(employee.salary); //$450,000

/*Using Default parameter*/
/*Default parameters allow you to set default values for function parameters if none are provided.
This avoid repeating yourself by redefining values every time */
function hi(name = "Bob") {
  console.log(`Hello ${name}`);
}
console.log(hi());
//
let customFunc = (a, b, c, d, e) => {
  return a + b;
};
customFunc(1, 2, 3, 4, 5);

customFunc = (a, b, ...args) => {
  return a + b;
};

// let customFunc = (a, b, ...args) => {
//   return ...args;
// };

// console.log(customFunc(1, 2, 3, 4, 5));

customFunc(1, 2, 3, 4, 5);
/*UNESCAPE & ESCAPE*/
/*The Escape() function is responsible for coding a string so as to make the transfer of the information
from one computer to the other, across a network.*/
document.write(escape("Hello! I am Brice")); //output : Hello%21%21%20I%20qm%20Brice

/*The Unescape() function is very important as it decodes the coded string.
It works in the following way*/
document.write(unescape("Hello%21%20I%20am%20Brice"));
/*Function Chaining*/
/*is a pattern in JavaScript where multiple func are called on the same
object consecutively,using the same object reference, multiple functions can be invoked*/
/*Object Method*/
const person = {
  sleep: function () {
    console.log("is sleeping");
    return this;
  },
  wakeUp: function () {
    console.log("woke up");
    return this;
  },
  eat: function () {
    console.log("is eating");
    return this;
  },
  study: function () {
    console.log("is studing");
    return this;
  },
};
person.sleep().eat().wakeUp().study();
