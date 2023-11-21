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

//Creating / Appending elements
document.createElement("name"); // create element node

document.createTextNode("text"); // create element node

document.appendChild("child"); // append child for elem
// child can be any element(div, p ...)

document.removeChild("child"); // remove Child for elem

document.replaceChild("newChild", "oldChild"); // replace child with a new one

//accessing parent, children, siblings

elem.children;
elem.childNode; // accessing element children

elem.firstChildElement;
elem.firstChild; // get first child

elem.lastChildElement;
elem.lastChild; // get last child

child.parentNode; // get parent

child.previousSibling; // previous sibling

child.nextSibling; //get next sibling

//node info

child.nodeName;
child.nodeType;
child.nodeValue;

//Modifying element classes
elem.classList; // access classes as a list

elem.classList.add("my-class"); // add class

elem.classList.remove("my-class"); // remove class

elem.classList.toogle("my-class"); // add/remove class if present

elem.classList.contains("my-class"); // is class applied to element? true/false
