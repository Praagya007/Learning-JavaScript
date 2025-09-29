// Step 1: Select important elements from the DOM
const todoInput = document.getElementById("new-todo");   // The input box
const addBtn = document.getElementById("add-btn");       // The Add button
const todoList = document.getElementById("todo-list");   // The <ul> where todos go
const stats = document.getElementById("stats");          // The stats div
const filterButtons = document.querySelectorAll(".filters button"); // All filter buttons


// Step 2: Add new todo
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim(); // remove extra spaces
  if (text === "") return; // do nothing if empty

  // Create a new li element
  const li = document.createElement("li");
  li.style.cursor="pointer";
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn" style="cursor:pointer">❌</button>
  `; //Dynamic addition of a todo in JavaScript.

  // Add to the list
  todoList.appendChild(li);

  // Clear the input
  todoInput.value = "";
  updateStats();
  saveTodos();
});

// Step 3: Handle toggle + delete
todoList.addEventListener("click",(e)=>{
 const target=e.target;

 if (target.tagName==="SPAN"){
  target.parentElement.classList.toggle("completed");
  updateStats();
  saveTodos();
 }
 if (target.classList.contains("delete-btn")){ //When clicked, if the classlist also contains the class delete-btn, meaning our delete button.
  target.parentElement.remove();
  updateStats();
  saveTodos();
 }
})

// Step 4: Support Enter key for adding todos (better version)
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click(); //Use whatever was in the addBtn.eventListener("click").
  }
});

// Step 5: Update stats (items left)
function updateStats() {
  const totalTodos = todoList.querySelectorAll("li").length;
  const completedTodos = todoList.querySelectorAll("li.completed").length;
  const activeTodos = totalTodos - completedTodos;

  stats.textContent = `${activeTodos} item${activeTodos !== 1 ? "s" : ""} left`; //If active todos not equals 1, add "s", if not add nothing.
  }

//Step 6: Local Storage
function saveTodos() {
  const todos = [];
  todoList.querySelectorAll("li").forEach(li => {
    todos.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed")
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos)); //localStorage only parses strings, later can be read safely using JSON.parse. 
}

//Prevent todos from disappearing if reloads. 

// In global object "window", Wait for the DOM to be fully loaded before running the code. 
window.addEventListener("DOMContentLoaded",()=>{
const todos=JSON.parse(localStorage.getItem("todos")) || []; //get item saved as todos key , if nothing just give it an empty array. 
  todos.forEach(todo => {
    const li = document.createElement("li");

    if (todo.completed) { //If completed = true, gotten from the localStorage's object.;
      li.classList.add("completed");
    }

    li.style.cursor = "pointer";
    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="delete-btn" style="cursor:pointer">❌</button>
    `; //In span, we use the text key of the todo object. 

    todoList.appendChild(li);
  });

  updateStats();
});

//Step 7: Toggling between buttons via filtration.
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
  