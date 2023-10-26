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
