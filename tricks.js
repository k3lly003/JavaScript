//Preventing User from pasting

Input.addEventListener("paste", (e) => {
  e.preventDefault();
});

//Use Window.print() Javascript Method to print the content of current page
<button onClick="window.print()">Print</button>;
