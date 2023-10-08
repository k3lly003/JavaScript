/* setting timer

The setTimeOut() function is used to execute a function or evaluate an expression after a specified delay (in milliseconds)
Synthax:

setTimeout(function, delay, arg1, arg2, ...)
.function: the function or expression to be executed.
.delay: the delay in ms before the function is executed.
.arg1,arg2: Optional argument to be passed to the function.

function greet(){console.log("hello")} setTimeOut(greet, 2000)

*/
setTimeout(() => {
  // window.location.href="https://www.facebook.com";
  console.log("https://www.youtube.com");
}, 5000);

// to set infinite time
setInterval(() => {
  window.alert("heeeey");
  5000;
}, 4000);

//to clean timeseter
const big = setTimeout(() => {
  console.log("https://www.youtube.com");
}, 4000);
clearTimeout(big);
//how to stop the popup by setting timer
const time = setInterval(() => {
  window.alert("hey there");
}, 5000);
const buto = document.getElementById("but");
buto.addEventListener("click", () => {
  clearInterval(time);
});
//
let a = "data type";
console.log(a);
//
let b = "2023";
console.log(b);
//
let c = "0\\7";
console.log(c);
//
let d = "false";
console.log(d);
//
let e = "1.5";
console.log(e);
//
let f = "10.0.000";
console.log(f);
//
console.log('Data"hello"types');
