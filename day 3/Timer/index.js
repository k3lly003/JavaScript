/* SETTING TIMER

The setTimeOut() function is used to execute a function or evaluate an expression after a specified delay (in milliseconds)
Synthax:

setTimeout(function, delay, arg1, arg2, ...)
.function: the function or expression to be executed.
.delay: the delay in ms before the function is executed.
.arg1,arg2: Optional argument to be passed to the function.

function greet(){console.log("hello")} setTimeOut(greet, 2000)

*/
//
/*  Exercise 1 */
function greet() {
  console.log("Hello, world");
}
setTimeout(greet, 2000); // Executes greet() after 2 secs delay
//
//
/*Exercise 2 */
setTimeout(() => {
  // window.location.href="https://www.facebook.com";
  console.log("https://www.youtube.com");
}, 5000);

// to set infinite time
setInterval(() => {
  window.alert("heeeey");
  5000;
}, 4000);

/*TO CLEAR TIMESETER*/

/*
The clearTimeout() function is used to cancel a timeout previously set with setTimeout(),
preventing associated function from being executed function from being executed.

Syntax:
clearTimeout(timeoutID)
timeoutID: the ID of the timeout to be canceled.
*/
/* Exercise 1            */

function greet() {
  console.log("Hello world");
}
const timeoutID = setTimeout(greet, 2000);
clearTimeout(
  timeoutID
); /*It'll cancel the timeout, and greet() func won't be executed*/

/* Exercise 2                               */
const big = setTimeout(() => {
  console.log("https://www.youtube.com");
}, 4000);
clearTimeout(big);
/*Exercise 1*/
/*HOW TO STOP THE POPUP BY SETTING TIMER */
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
