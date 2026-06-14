const inp = document.querySelector("input");
const addTodo = document.querySelector(".add");
const listContainer = document.querySelector(".list-container");
const addImg = document.querySelector(".add-img");
const notify = document.querySelector(".notification-msg");

let editTodo = null;

let addTodoList = () => {
  if (editTodo) {
    editTodo.querySelector("li").textContent = inp.value;
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
  todo.appendChild(li);

  li.textContent = inpValue;

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

  notify.style.color = "green";

  notify.textContent = "Todo item Created Successfully!";

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
  }
  if (e.target.classList.contains("edit")) {
    editTodo = e.target.parentElement.parentElement;
    inp.value = editTodo.childNodes[0].textContent;
    addImg.src = "./assets/refresh.png";
  }
};

addTodo.addEventListener("click", addTodoList);
listContainer.addEventListener("click", updateTodoList);
