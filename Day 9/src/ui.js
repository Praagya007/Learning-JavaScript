//ui.js

export function updateStats() {
  const todoList = document.getElementById("todo-list");
  const stats = document.getElementById("stats");

  const totalTodos = todoList.querySelectorAll("li").length;
  const completedTodos = todoList.querySelectorAll("li.completed").length;
  const activeTodos = totalTodos - completedTodos;

  stats.textContent = `${activeTodos} item${activeTodos !== 1 ? "s" : ""} left`;
}


export function filterButtonsUI(filterButtons){
 filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove("active"));
    // Add active class to the button, only when clicked.
    btn.classList.add("active"); 

    const filter = btn.dataset.filter; // all / active / completed

    // Loop through todos and filter
    todoList.querySelectorAll("li").forEach(li => {
      switch (filter) {
        case "all":
          li.style.display = "flex"; // show all
          break;
        case "active":
          li.style.display = li.classList.contains("completed") ? "none" : "flex";
          break;
        case "completed":
          li.style.display = li.classList.contains("completed") ? "flex" : "none";
          break;
      }
    });
  });
});
  }