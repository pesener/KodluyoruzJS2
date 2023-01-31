window.addEventListener("load", () => {
  localStorage.setItem;
});

var items = ["item 1", "items 2"];

var list = document.querySelector("#myList");

items.forEach(function (item) {
  CreateItem(item);
});

list.addEventListener("click", function (item) {
  if ((item.target.tagName = "li")) {
    item.target.classList.toggle("checked");
  }
});

document.querySelector("#btnCreate").onclick = function () {
  var item = document.querySelector("#task").value;
  if (item.match(/^\s*$/)) {
    alert("lütfen bir değer giriniz");
    return;
  }
  CreateItem(item);
  location.reload();
};

function CreateItem(item) {
  var li = document.createElement("li");
  var t = document.createTextNode(item);
  li.className = "list-group";
  li.appendChild(t);

  list.appendChild(li);

  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    var li = this.parentElement;
    li.style.display = "none";
  };

  localStorage.setItem("items", JSON.stringify(item));
}
