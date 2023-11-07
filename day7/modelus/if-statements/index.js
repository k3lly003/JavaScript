console.log(1 / 5);
console.log(1 % 4); //1
console.log(2 % 4); //2
console.log(3 % 4); //3
console.log(4 % 4); //0
console.log(5 % 4); //1       //to see if the number is divisible by another we use %
console.log(6 % 4); //2
console.log(7 % 4); //3
console.log(8 % 4); //4
console.log(9 % 4); //5
console.log(0 % 4);
//modelus doesn't give u the answer it gives only the remender and gives 1 level
//
// practice 1
if (60 % 5 == 0) {
  console.log("the number is divisible by 5");
} else if (0 % 4 == 0) {
  console.log("the number is divisible by 4"); //the 1st condition is true it jumps 2 d second one & make a cndtion on that 1st cndtion
} else {
  console.log("the number is not divisible by 5 and 4");
}
// practice 2
// let array=[2,4,5,6,1,0];
// function check(){
//     let big=array.split(",").length;
//     if (big % 2== 0){
//         console.log("the number is even");
//     }
//     else if{
//         console.log("the number is not even")
//     }
// }
//*********correction ******//
let array = [3, 4, 5, 6, 7, 2];
let big = array.length;
if (big % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//
function all(a) {
  //Here we din't assign "a" 2 something bcz if u do so u assign the value of d called valuable 2 that.
  let total = a.length;
  if (total % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
let b = ["t", "w", "2", "y", "5", "6"];
all(b);
let v = [2, 3, 4, 5, 6, 7, 7, 8, 4, 5, 3, 2, 1, 1, 2, 3, 3, 3, 4, 3];
