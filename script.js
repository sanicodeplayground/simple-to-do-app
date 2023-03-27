document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = todoInput.value.trim();
    if (task) {
      addToDoItem(task);
      todoInput.value = "";
    }
  });

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentElement.remove();
    }
  });

  function addToDoItem(task) {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    const taskText = document.createElement("span");
    taskText.classList.add("todo-text");
    taskText.innerText = task;
    listItem.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "Delete";
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }
});
