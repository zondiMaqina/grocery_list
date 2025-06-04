const addItemButton = document.querySelector("section#list-maker button");
const itemText = document.querySelector("input#item");
const ul = document.querySelector("main ul");

function addItem() {
  const item = document.createElement("li");
  const removeItemBtn = document.createElement("button");
  item.textContent = itemText.value;
  removeItemBtn.textContent = "remove item";
  item.appendChild(removeItemBtn);
  ul.appendChild(item);
  removeItemBtn.addEventListener("click", function(){
    ul.removeChild(item);
  });
}

addItemButton.addEventListener("click", addItem);
