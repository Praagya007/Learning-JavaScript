import { updateStats, filterButtonsUI } from "./ui.js";
import { saveTodos , loadTodos} from "./storage.js";
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
// import from ui.js

//Step 6: Local Storage
// import from storage.js



// In global object "window", Wait for the DOM to be fully loaded before running the code. Prevent todos from disappearing if reloads. 
window.addEventListener("DOMContentLoaded",()=>{
const todos=loadTodos(); //get item saved as todos key , if nothing just give it an empty array.  loadTodos from storage.js
  todos.forEach(todo => {
    const li = document.createElement("li");

    if (todo.completed) { //If completed = true;
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
//Import from ui.js. 

