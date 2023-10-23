//Preventing User from pasting

// Input.addEventListener("paste", (e) => {
//   e.preventDefault();
// });

// //Use Window.print() Javascript Method to print the content of current page
// <button onClick="window.print()">Print</button>;

// let a = [1, 5, 42, 56, 77];

// let solution = a.sort((a, b) => b - a);
// console.log(solution);
// Map.set()
// const fruits =new.Map([
//   ['🍉', 100],
//   ['🍌', 50],
//   ['🥭',250],
//   ['🍏',apple],
//   ['🍋',lemon],
// ])
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
