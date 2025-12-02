const createTaskCard = (title, desc, priority, date, time) => {
  const card = document.createElement("div");
  card.className = "task-card";
  card.draggable = true;

  card.innerHTML = `<div class="task-title">${title}</div>
        <div class="task-desc">${desc}</div>
        <div class="task-meta">
            <span class="priority ${priority.toLowerCase()}">${priority}</span>
            <span class="task-date">${date}</span>
            <span class="task-time">${time}</span>
        </div>`;

  return card;
};

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const tasksDiv = this.previousElementSibling;
    const title = prompt("Enter the title : ");
    if (!title) return;
    const desc = prompt("Enter task description:") || "";
    const priority = prompt("priority? (Low, Medium, Urgent)", "medium");
    const date = prompt(
      "Due date? (e.g. July 31, 2024)",
      new Date().toLocaleDateString()
    );
    const time = prompt("Time? (e.g. 1 hr ago)", "now");
    const card = createTaskCard(title, desc, priority, date, time);
    tasksDiv.appendChild(card);
  });
});

let draggedTask = null;

document.addEventListener("dragstart", function (e) {
  if (e.target.classList.contains("task-card")) {
    draggedTask = e.target;
    setTimeout(() => {
      e.target.classList.add("dragging");
    }, 0);
  }
});

document.addEventListener("dragend", function (e) {
  if (e.target.classList.contains("task-card")) {
    e.target.classList.remove("dragging");
    draggedTask = null;
  }
});

document.querySelectorAll(".tasks").forEach((tasksDiv) => {
  tasksDiv.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  tasksDiv.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedTask) {
      this.appendChild(draggedTask);
    }
  });
});
