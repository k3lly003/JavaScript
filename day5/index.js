function adding() {
  console.log(1 + 1);
}
adding();
//functions
function substraction() {
  console.log(1 - 1);
}
function multiplication() {
  console.log(1 * 1);
}
// callings
multiplication();
substraction();
// 2nd synthax
let name = "Elvis";
let surname = "Mugisha";
function phonecall(n) {
  console.log("hello " + "my friend " + n);
}
phonecall(name);
//activity
let house = {
  doors: 2,
  windows: 2,
  chairs: function () {
    console.log("chairs");
    console.log("pazo");
    console.log("pao");
    console.log("kai");
  },
};
house.chairs();
//  to call method u do objectName.methodName();
// bcz method iba i holdinze function
//there's no need to give d name 2 the fuxion agyn bcz it has 1(chairs)(26)
