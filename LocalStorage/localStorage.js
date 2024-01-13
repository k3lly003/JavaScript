const form = document.querySelector(".myform");
const createButton = document.getElementById("create");
const updateButton = document.getElementById("update");
const deleteButton = document.getElementById("delete");
const contentSection = document.querySelector("section");

function handleCreate() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  createContent(name, message);
  displayContent();
  clearForm();
}

function handleUpdate() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  updateContent(name, message);
  displayContent();
  clearForm();
}

function handleDelete() {
  const name = document.getElementById("name").value;

  deleteContent(name);
  displayContent();
  clearForm();
}

// Form submission handling
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Call the appropriate function based on the clicked button
  if (event.target.activeElement.id === "create") {
    handleCreate();
  } else if (event.target.activeElement.id === "update") {
    handleUpdate();
  } else if (event.target.activeElement.id === "delete") {
    handleDelete();
  }
});

// Content management functions
function createContent(name, message) {
  const content = { name, message };
  const arr = [];
  const timestamp = Date.now();
  const data = localStorage.setItem(timestamp, JSON.stringify(content));
  data.push(arr);
}
function updateContent(name, message) {
  const existingContent = JSON.parse(
    localStorage.getItem(findContentKeyByName(name))
  );
  existingContent.message = message;
  localStorage.setItem(
    findContentKeyByName(name),
    JSON.stringify(existingContent)
  );
}

function deleteContent(name) {
  localStorage.removeItem(findContentKeyByName(name));
}

function findContentKeyByName(name) {
  for (const key in localStorage) {
    const content = JSON.parse(localStorage.getItem(key));
    if (content.name === name) {
      return key;
    }
  }
  return null;
}

// Displaying the data
function displayContent() {
  contentSection.innerHTML = "";
  const ul = document.createElement("ul");
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const content = JSON.parse(localStorage.getItem(key));
      const li = document.createElement("li");
      li.innerHTML = `${content.name}: ${content.message}`;
      ul.appendChild("li");
    }
  }
  contentSection.appendChild(ul);
}
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

// Display data on page load
displayContent();
