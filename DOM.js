//DOM Methods

//Accessing Element
document.getElementById("id"); //finds element by its Id

document.getElementsByClassName("class"); //finds element by its Class

document.getElementByName("name"); // finds element by its name attribute

document.getElementByTagName("tag"); // finds element by tag Name

document.querySelector("selector"); // finds first element matching selector

document.querySelectorAll("selector"); // finds all element matching selector

//Modifying attributes
elem.outerHTML = "<h2>OuterHTML</h2>"; // modifying element
elem.outerHTML = "New <strong>inner</strong>";

elem.textContent = "New textContent"; // modify text content

elem.style = "color: blue"; // modify style

//Modifying attributes
elem.getAttribute("title"); // get current attribute value

elem.setAttribute("title", "new title"); // set attribute with new value

elem.hasAttribute("title"); // is attribute on element true / false

elem.removeAttribute("title"); // removes attribute from element
