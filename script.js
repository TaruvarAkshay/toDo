const inputTodo=document.querySelector("#inputTodo");
const addBtn=document.querySelector("#addBtn");
const todoList=document.querySelector("#todoList");

addBtn.addEventListener("click", function() {
const todoText = inputTodo.value;

if(todoText.trim() !=="") {
    const listItem =document.createElement('li');
    listItem.textContent=todoText;
    todoList.appendChild(listItem);
    inputTodo.value="";
}

});

/*
addBtn.addEventListener("click", function() {
  const todoText = inputTodo.value;

  if (todoText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    inputTodo.value = "";
  }
});*/

todoList.addEventListener("dblclick", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
// Select the inputTodo input element

// Add an event listener to the inputTodo for the keyup event
inputTodo.addEventListener("keyup", function(event) {
  // Check if the Enter key is pressed
  if (event.keyCode === 13) {
    // Call the function to add a new to-do item
    addTodo();
  }
});

// Select the addBtn button element

// Add an event listener to the addBtn for the click event
addBtn.addEventListener("click", function() {
  // Call the function to add a new to-do item
  addTodo();
});

// Function to add a new to-do item
function addTodo() {
  const todoText = inputTodo.value;

  if (todoText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    inputTodo.value = "";
  }
}

  