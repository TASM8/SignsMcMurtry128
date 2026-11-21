// app.js runs in the browser.
//
// The browser can't talk to the database directly. Instead, it uses fetch()
// to send a message to one of our Netlify Functions (in netlify/functions/),
// and the function talks to the database.
//
// "async" and "await" are needed whenever we talk to the server.
// "await" just means: wait for the server to answer before moving on.


// READ: get all the items from the server and show them on the page
async function loadItems() {
  const response = await fetch("/api/get-items");
  const items = await response.json();

  const list = document.getElementById("item-list");
  list.innerHTML = "";

//<span> does not create a new line, like <div> does, but only takes of the needed space
// ${item.id} <------- That function, I hate it. The amount of times I typed it incorrectly
//is not funny. Holy crap, hate it!

  for (const item of items) {
    list.innerHTML += `
      <li> 
        <span>${item.title}</span> 
        <span> - ${item.category}</span>
        <button onclick="editItem(${item.id})">Edit</button> 
        <button onclick="deleteItem(${item.id})">Delete</button>
      </li>
    `;
  }
}


// CREATE: add a new item using the text in the input box
// Added the category input, to have the user put their list in a category

async function addItem() {
  const input = document.getElementById("title-input");
  const categoryInput = document.getElementById("category-input");

  const title = input.value;
  const category = categoryInput.value;

// Allows the user to enter in whatever they desire as their title

  if (title === "" || category === "") {
    alert("Please enter a topic and choose a category!");
    return;
  }

  await fetch("/api/add-item", {
    method: "POST",
    body: JSON.stringify({ title: title, category: category }),
  });

  input.value = "";
  categoryInput.value ="";
  loadItems();
}


// UPDATE: ask for a new title, then save it, also added category, needed that.
// This section was tricky because I had not added .trim() to the category, just
// Copied the newTitle section. News flash, did not work
async function editItem(id) {
  const newTitle = prompt("Enter a new topic and then select category: ");

  if (newTitle === null || newTitle === "") {
    return;
  }

  const newCategory = prompt("Enter the category (Game Basics, Character Creation, or Gameplay):");

  if (newCategory === null || newCategory.trim() === "") {
    return;
  }

  await fetch("/api/update-item", {
    method: "POST",
    body: JSON.stringify({ id: id, title: newTitle.trim(), category: newCategory.trim() }),
  });

  loadItems();
}


// DELETE: remove an item
async function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this adventurer?")) {
    return;
  }

  await fetch("/api/delete-item", {
    method: "POST",
    body: JSON.stringify({ id: id }),
  });

  loadItems();
}


// Show the items as soon as the page opens
loadItems();
