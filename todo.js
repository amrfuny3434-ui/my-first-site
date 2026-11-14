const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
  }
}

function renderTasks() {
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tasks[i];

    const delBtn = document.createElement("button");
    delBtn.textContent = "مسح";
    delBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  }
}

function addTask() {
  const text = input.value.trim();

  if (text === "") {
    return;
  }

  tasks.push(text);
  saveTasks();
  renderTasks();

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

loadTasks();
renderTasks();