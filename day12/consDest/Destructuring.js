/*Destructuring is a feature  introduced in ES6 (ES2015)    that provides a way to extract 
values from arrays or properties from objects and bind them to distinct variables.
It allows for more concise and readable code when accessing these values*/
//
/*Let's break it down 👇🏿*/
/*ARRAY DESTRUCTURING*/
//
/*With array destructuring you can
unpack items from array directly into valiables*/
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
/*Output*/
console.log(firstColor);
console.log(secondColor);

/*OBJECT DESTRUCTURING*/
/*Object destructuring allows you to extract properties from objects*/
let person = { surName: "John Doe", age: 34 };
const { surName, age } = person;
/*Output*/
console.log(surName);
console.log(age);
/*For objects with nested structure, you can desturcture in aa layered manner*/
const student = {
  nam: "code",
  scores: {
    math: 90,
    science: 85,
  },
};
const {
  nam,
  scores: { math },
} = student;
console.log(nam);
console.log(math);
/*Function parameter destructuring*/
/*This Especially userful when working with function parameters*/
function introduce({ nam }) {
  console.log(`My name is ${nam}`);
}
introduction(profile); //My name is code
//Destructuring
//Taking a value from arrays or properties of an object and set them as local valiables

//Old way😔
const bigCats = ["🦁", "🐯"];
const tiger = arr["🐯"];
const lion = arr["🦁"];

//New way😎
const [egg, fish] = ["🥚", "🐟"];

//the synthax looks the same as that of useState in react
const [num, setNum] = useState(0);
//
const arr = ["🥓", "🍉", "🍟"];
const [bacon, waterMellon, fries] = food;

const obj = {
  banana: "🍌",
  bugger: "🍔",
  pizza: "🍕",
};
const { banana, ...rest } = obj;

console.log(rest);

//Destructuring can also work on Nested obj

const object = {
  banana: "🍌",
  bugger: "🍔",
  pizza: "🍕",
  parent: {
    child: "👶",
  },
};
const {
  parent: { child },
} = object;

console.log(child);

//U can ignore Values

const cars = {
  van: "🚐",
  truck: "🚛",
  bus: "🚎",
  ambulance: "🚑",
};
const [, , , ambulance] = car;

console.log(car);
