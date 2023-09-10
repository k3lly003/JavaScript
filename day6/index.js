function rtrn() {
  let sum = 100 ** 3 + 9874;
  console.log(sum);
}
rtrn();

//

let sum = 100 * 3 + 9874;
function rtrn() {
  let sum = 100 * 3 + 9874;
  console.log(sum);
  return sum; //rtrn gives u d permission to use the value outside the function

  return "sum";
}
let a = rtrn();
let salary = a + 1000; //the 1st cnsl=string bcz rtrn=string
console.log(a); //the 2nd cnsl=string+number(but it is a string)
console.log(salary); //it'll also give string+number
console.log("it the bonus", salary);
//write a function to add two given numbers and return
//the response/sumation.
function adding(a, b) {
  return a + b;
}
adding(1, 5);
console.log(adding(1, 5));
console.log("above is the answer for act 1");
// write a program to process any given string and return
//the number of words found after a separation of semicolon.
function check(x) {
  let rtrn = x.split(";").length;
  return rtrn; //the problem was on how i spelled length.
  console.log(rtrn);
}
console.log(check("bruce;Kelly"));
console.log(check("am;feelin;good"));
