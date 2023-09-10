let text1 = document.getElementsByClassName("user")[0];
let text2 = document.getElementsByClassName("em")[0];
let text3 = document.getElementsByClassName("pass")[0];
let buto = document.getElementsByClassName("btn")[0];
buto.addEventListener("submit", (event) => {
  event.preventDefault();
  let fArray = JSON.parse(localStorage.getItem("array"));
  let arr = fArray.filter((item) => item.email === email.value);
  if (arr.length == 0) {
    alert("first sign in");
  } else {
    alert("login successfully");
  }
  console.log("filteredArray", arr);
});
