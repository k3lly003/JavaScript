let table = {
  color: "brown",
  size: "2m",
  shape: "rectangle",
  weight: "2kg",
  legs: "4",
};
console.log(table);
// to see the value of size
console.log(table.size);
// to change the value
console.log((table.shape = "square"));
// to add a value
console.log((table.price = 2000));
console.log(table);
//activity
let peoples = ["Eddie", "Angelo", "Kelly"];
console.log(peoples);
//
let weights = ["60kg", "60kg", "76kg"];
console.log(weights);
//
let Eddie = {
  color: "brown",
  size: "tall",
  eyes: "darkbrown",
};
let Angelo = {
  color: "lightbrown",
  size: "medium",
  eyes: "brown",
};
let Kelly = {
  color: "dark",
  size: "taller",
  eyes: "black",
};
console.log(Eddie, Angelo, Kelly);
//
let characters = [
  {
    color: "brown",
    size: "tall",
    eyes: "darkbrown",
  },
  {
    color: "lightbrown",
    size: "medium",
    eyes: "brown",
  },
  {
    color: "dark",
    size: "taller",
    eyes: "black",
  },
];
console.log(characters);
// how to access individual element
console.log(peoples[1]);
// challenge
console.log(characters[2].color);
//changing to uppercase
let boo = "kelly";
let ko = boo.toUpperCase();
console.log(ko);
// to lowercase
let zoo = boo.toLowerCase();
console.log(zoo);
//to grab some among other
let goo = "hello class,xyz";
let moto = goo.slice(11, 14);
console.log(moto);
let moo = goo.slice(6, 11);
console.log(moo);
//**********how to replace********
let too = goo.replace("class", "morning");
console.log(too);
//
let ring = "hello morning,xyz Teckcode";
let foo = ring.split("o");
console.log(foo);
// 2nd queston answer in upper case
// ..........challenge...........
// let check = document.getElementById("txt");
// low = check.innerHTML.replace("we", "you").replace("We", "i");
// console.log(low);
// ***OR***
let check = document.getElementById("txt");
sentences = check.innerHTML.split(". ");
let sentence1 = sentences[0].replace("we", "you");
let sentence2 = sentences[1].replace("We", "You");
let hu = sentence2.toUpperCase;
let sentence3 = sentences[2].replace("I", "You");
let sentence4 = sentences[3];
let result = sentence1 + ". \n" + hu + ". \n" + sentence3 + ". \n" + sentence4;
console.log(result);
// let upper = check.innerHTML.toUpperCase();
// console.log(upper);
// //
// gik = check.innerHTML.slice(85, 93);
// console.log();
// zip = check.innerHTML.replace("exercise", "Practice");
// console.log(zip);
let text = check.innerHTML.split(". ");
// let sent = sentences[1].toUpperCase();
console.log(text);
// sentence2 = sentences[1].replace("exercises", "practice");
// console.log(sentence2);
//
//
// ****numbers*****
let a = "1 1";
let d = parseInt(a);
let b = 1;
let c = d + b;
console.log(c);
// the above question "+" =111 while "-" =10 ????
// when you add a string to another data type to solve that you use parseInt();
// to solve that u add line 113
// same to bellow
let z = 2.333;
let w = 1;
let f = parseInt(z);
let q = f + w;
console.log(q);
// now to select 2.3 in numbers
let g = 2.333;
let j = g.toFixed(2.3);
console.log(j);
//
//
//
//
//
//
let names = ["Elvis", "keynes", "robert"];
let all = names.join(" ");
console.log(all);
// if you add space it add space btn the names
// to reverse the above
let rev = names.reverse(all);
console.log(rev);
// challenge
// let king = "today is tuesday";
// let queen = king.spit("");
// console.log(queen);
// to solve above 1st split 2nd reverse 3rd join
// how to change a number to a string
let k = 10024;
let u = k.toString();
console.log(u);
//
//
//
//to do reverse
let kai = "i.like.this.program.very.much";
let peter = kai.split(".");
console.log(peter);
let kao = peter.reverse();
console.log(kao);
// how to see number of items in an array use (.lenght)
let paca = "today is tuesday";
let like = paca.split(" ");
console.log(like);
size = like.reverse();
console.log(size);
mbomba = size.join();
console.log(mbomba);
//
let wap = "12";
let zap = parseInt(wap);
console.log(zap);
let rap = "1.5";
let jap = parseInt(rap);
console.log(jap);
let kap = wap + rap;
kap = zap + jap;
console.log(kap);
