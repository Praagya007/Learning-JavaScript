//storage.js 
export function saveTodos() {
  const todoList=document.getElementById("todo-list");
  const todos = [];
  todoList.querySelectorAll("li").forEach(li => {
    todos.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed")
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos)); //localStorage only parses strings, later can be read safely using JSON.parse. 
}

// Export a function to load todos from localStorage
export function loadTodos() {
  return JSON.parse(localStorage.getItem("todos")) || []; // If nothing in localStorage, return an empty array
}