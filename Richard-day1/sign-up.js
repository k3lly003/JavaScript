const signuppage = document.getElementsByClassName("form2")[0];
let text1 = document.getElementsByClassName("user")[0];
let text2 = document.getElementsByClassName("em")[0];
let text3 = document.getElementsByClassName("pass")[0];
signuppage.addEventListener("submit", (event) => {
  event.preventDefault(); //add event in () and add this lineof event.preventDefault()
  let user = text1;
  let email = text2;
  let password = text3;
  let arr = [];
  let personidentification = {
    user: user,
    email: email,
    password: password,
  };
  arr.push(personidentification);
  localStorage.setItem("array", JSON.stringify(array));
  let finalaray = JSON.parse(localStorage.getItem("array"));
  finalaray.push(personidentification);
  localStorage.setItem(array, stringify(finalaray));
  console.log(arr);
});
