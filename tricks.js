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
let sellerOutPut = setTimeout(leti, 5000);
/*Cloning/copying an object with { ...objName })*/
var car = {
  name: "benz",
  mode: "aws",
};
const carCopy = { ...car };
console.log(carCopy);
