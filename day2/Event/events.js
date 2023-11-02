const save = document.getElementById("save");
save.addEventListener("click", () => {
  window.alert("successfully sent");
});
save.addEventListener("dblclick", () => {
  console.log("hello double click");
});
const forma = document.getElementById("form");
forma.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = forma.brice.value;
  let password = forma.ok.value;
  window.alert(text);
  window.alert(password);
  if (text == "") {
    confirm("your pass please");
  }
  form.reset();
});
