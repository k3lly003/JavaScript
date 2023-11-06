const save = document.getElementById("save");
const forma = document.getElementById("form");
save.addEventListener("click", () => {
  forma.addEventListener("submit", (event) => {
    event.preventDefault();
    let text = forma.brice.value;
    let password = forma.ok.value;
    if ((text == "") & (password == "")) {
      confirm("Please insert your credentials");
    } else {
      window.alert(text);
      window.alert(password);
      forma.reset();
    }
  });
});
save.addEventListener("dblclick", () => {
  console.log("hello double click");
});
