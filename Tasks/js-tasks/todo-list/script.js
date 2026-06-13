const inp = document.querySelector("input");
const addTodo = document.querySelector(".add");
const listContainer = document.querySelector(".list-container");
const deleteTodo = document.querySelector(".delete");
const list = document.querySelector(".list");

function addTodoList() {
  return addTodo.addEventListener("click", () => {
    let val = [inp.value];

    if (!inp.value.trim()) return;
    val.forEach((elem, idx) => {
      return (listContainer.innerHTML += ` <div
            class="list shrink-0 h-[40px] sm:h-[50px] pl-2 pr-2 flex items-center justify-between w-[90%] bg-[#ECEEF0] rounded-sm"
          >
            <div class="flex items-center gap-0 sm:gap-1">
              <p class="text-[13px] sm:text-[17px]">${elem}</p>
              <img
                class="h-[15px] hidden sm:h-[20px]"
                src="./assets/check-mark.png"
                alt=""
              />
            </div>
            <div
              class="edit-del cursor-pointer flex items-center gap-2 sm:gap-5"
            >
              <img
                class="h-[15px] sm:h-[18px]"
                src="./assets/pencil.png"
                alt=""
              />
              <img
              data-id="${idx}"
                class="delete h-[15px] sm:h-[18px]"
                src="./assets/delete.png"
                alt=""
              />
            </div>
          </div>`);
    });
    inp.value = "";
  });
}
addTodoList();

function removeTodo() {
  listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const index = e.target.dataset.id;
      
    }
  });
}
removeTodo();
