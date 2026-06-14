//  Create a to-do list (add, delete, mark complete).

const addTaskBtn = document.getElementById("addTaskBtn");
const inputTask = document.getElementById("inputTask");
const taskSection = document.querySelector(".taskSection");

addTaskBtn.addEventListener("click", function () {
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
  deletebtn.innerText = "🗑";

  div2.appendChild(checkbox);
  div2.appendChild(task);
  div.appendChild(div2);
  div.appendChild(deletebtn);
  taskSection.appendChild(div);
});
