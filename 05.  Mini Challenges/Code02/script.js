//  Create a to-do list (add, delete, mark complete).

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let id = 0;
const addTaskBtn = document.getElementById("addTaskBtn");
const inputTask = document.getElementById("inputTask");
const taskSection = document.querySelector(".taskSection");
const deleteBtn = document.querySelector(".delete-btn");

function createTaskcontainer(text, UID) {
  let div = document.createElement("div");
  div.classList.add("task-card");
  div.id = UID;

  let div2 = document.createElement("div");
  div2.classList.add("left");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let task = document.createElement("p");
  task.innerText = text;

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
    const task = {
      identity: id++,
      text: inputTask.value,
      mark: false,
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTaskcontainer(task.text, task.identity);
    inputTask.value = "";
    console.log(tasks);
  }
});

window.onload = loadTaskcards;
function loadTaskcards() {
  tasks.forEach((element) => {
    createTaskcontainer(element.text, element.identity);
  });
}

taskSection.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    let getidtoRemove = e.target.closest(".task-card").id;
    e.target.closest(".task-card").remove();
    for (const key in tasks) {
      if (getidtoRemove == tasks[key].identity) {
        console.log(tasks[key].identity);
        tasks.splice(key, 1);
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
// localStorage.clear();
