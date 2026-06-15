//  Create a to-do list (add, delete, mark complete).

const addTaskBtn = document.getElementById("addTaskBtn");
const inputTask = document.getElementById("inputTask");
const taskSection = document.querySelector(".taskSection");
const deleteBtn = document.querySelector(".delete-btn");

function createTaskcontainer() {
  let div = document.createElement("div");
  div.classList.add("task-card");

  let div2 = document.createElement("div");
  div2.classList.add("left");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let task = document.createElement("p");
  task.innerText = inputTask.value;

  let deletebtn = document.createElement("button");
  deletebtn.classList.add("delete-btn");

  let deleteicon = document.createElement("i");
  deleteicon.classList.add("fa-regular", "fa-trash-can");

  div2.appendChild(checkbox);
  div2.appendChild(task);
  deletebtn.appendChild(deleteicon);
  div.appendChild(div2);
  div.appendChild(deletebtn);
  taskSection.appendChild(div);
}

addTaskBtn.addEventListener("click", function () {
  if (inputTask.value === "") {
    return alert("Enter task");
  } else {
    createTaskcontainer();
    inputTask.value = "";
  }
});

taskSection.addEventListener("click", function (e) {
  if (e.target.type === "checkbox") {
    if (e.target.checked) {
      e.target.closest(".task-card").classList.add("completed");
    } else {
      e.target.closest(".task-card").classList.remove("completed");
    }
  }
});

taskSection.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    e.target.closest(".task-card").remove();
  }
});
