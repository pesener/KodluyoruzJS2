//var descriptions
var list = document.querySelector("#myList");

var form = document.querySelector("form");

var input = document.querySelector("#task");

let items;

loadItems();

//event listeners
addEventListeners();

function addEventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  //delete an item
  list.addEventListener("click", deleteItem);
}

function loadItems() {
  items = getItemsFromLS();

  items.forEach(function (item) {
    createItem(item);
  });
}

//get item from localStorage
function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

//set item to localStorage

function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

//delete item from localStorage
function deleteItemFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item == text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}

//create item
function createItem(text) {
  //add li and text to li
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  li.className = "list-group";

  //add span to li
  const span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  // add li to ul
  list.appendChild(li);

  //check when its click and add a class
  li.addEventListener("click", function (item) {
    if ((item.target.tagName = "li")) {
      item.target.classList.toggle("checked");
    }
  });
}

// add new item
function addNewItem(e) {
  //check if its empty or whitespace
  var inpy = input.value;
  if (inpy.match(/^\s*$/)) {
    alert("lütfen bir değer giriniz");
    return;
  }
  // create item
  createItem(input.value);

  //save to LS
  setItemToLS(input.value);

  //clear input
  input.value = "";

  e.preventDefault();
}

function deleteItem(e) {
  if (e.target.className === "close") {
    if (confirm("emin misiniz?")) {
      e.target.parentElement.remove();

      //delete item from LS

      deleteItemFromLS(e.target.parentElement.textContent);
    }
  }

  e.preventDefault(e);
}
