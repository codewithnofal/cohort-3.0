const inp = document.querySelector("input");
const addTodo = document.querySelector(".add");
const listContainer = document.querySelector(".list-container");
const addImg = document.querySelector(".add-img");
const notify = document.querySelector(".notification-msg");
let emptyState = document.querySelector(".emptystate");

let editTodo = null;

let addTodoList = () => {
  if (editTodo) {
    editTodo.querySelector("li").textContent = inp.value;
    localStorage.setItem("todos", listContainer.innerHTML);

    notify.style.color = "lightSeaGreen";
    notify.textContent = "Todo updated Successfully!";

    setTimeout(() => {
      notify.textContent = "";
    }, 1000);
    editTodo = null;
    addImg.src = "./assets/plus.png";
    inp.value = "";
    return;
  }

  let inpValue = inp.value.trim();
  if (!inpValue) return;

  let todoList = document.createElement("div");
  todoList.classList.add("todo-list");
  listContainer.appendChild(todoList);

  let todo = document.createElement("div");
  todo.classList.add("todo");
  todoList.appendChild(todo);

  let li = document.createElement("li");
  li.classList.add("list");
  todo.appendChild(li);

  li.textContent = inpValue;

  let read = document.createElement("img");
  read.classList.add("readimg");
  read.src = "./assets/check-mark.png";
  todo.appendChild(read);

  let update = document.createElement("div");
  update.classList.add("edit-del");
  todoList.appendChild(update);

  let edit = document.createElement("img");
  edit.src = "./assets/pencil.png";
  edit.classList.add("edit");

  let del = document.createElement("img");
  del.src = "./assets/delete.png";
  del.classList.add("delete");

  update.append(edit, del);

  emptyState.style.display = "none";

  notify.style.color = "green";

  notify.textContent = "Todo item Created Successfully!";
  localStorage.setItem("todos", listContainer.innerHTML);

  setTimeout(() => {
    notify.textContent = "";
  }, 700);

  inp.value = "";
};

let updateTodoList = (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();

    notify.style.color = "red";
    notify.textContent = "Todo item Deletd Successfully!";

    setTimeout(() => {
      notify.textContent = "";
    }, 700);
    localStorage.setItem("todos", listContainer.innerHTML);

    const allTodos = document.querySelectorAll(".todo-list");
    if (allTodos.length === 0) {
      localStorage.clear("todos");
      emptyState.style.display = "block";
    }
  }
  if (e.target.classList.contains("edit")) {
    editTodo = e.target.parentElement.parentElement;
    inp.value = editTodo.childNodes[0].textContent;
    addImg.src = "./assets/refresh.png";
  }

  if (e.target.classList.contains("list")) {
    e.target.classList.toggle("active");

    if (e.target.classList.contains("active")) {
      e.target.parentElement.parentElement.querySelector(
        ".readimg",
      ).style.display = "block";
    } else {
      e.target.parentElement.parentElement.querySelector(
        ".readimg",
      ).style.display = "none";
    }

    localStorage.setItem("todos", listContainer.innerHTML);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  let savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    listContainer.innerHTML = savedTodos;
    console.log(savedTodos);
  }
});

addTodo.addEventListener("click", addTodoList);
listContainer.addEventListener("click", updateTodoList);
