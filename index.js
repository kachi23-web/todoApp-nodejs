let title = document.getElementById("title");
let prompt = document.getElementById("prompt");

let deleteButton = document.getElementsByClassName("delete");

let allTasks = document.getElementById("tasks-list");

function addTask() {
   let newTask = prompt.value; // get the value of the input
   
   let taskText = document.createElement("span");
   taskText.className = "task-text";
   taskText.innerText = newTask;

   let newTaskElement = document.createElement("li");
   newTaskElement.appendChild(taskText);

   let checkTask = document.createElement("span");
   checkTask.className = "check";
   checkTask.innerText = "✅";
   newTaskElement.appendChild(checkTask);
   
   // create a new span element
   let deleteTask = document.createElement("span");
   deleteTask.className = "delete";
   // set the inner text of the span element to the delete icon
   deleteTask.innerText = "❌";
   // add the span element to the li element
   newTaskElement.appendChild(deleteTask);

   

   // add the li element to the ul element
   allTasks.appendChild(newTaskElement);
   
   // clear the input
   prompt.value = "";
   save();
}

allTasks.addEventListener("click", function(event) {
   if (event.target.className === "delete") {
      event.target.parentElement.remove();
      save();
   }
   if (event.target.className === "check") {
      let taskText = event.target.parentElement.querySelector(".task-text");
      taskText.classList.toggle("completed");
      save();
   }

});

function save() {
   localStorage.setItem("tasks", allTasks.innerHTML);
}

function getTasks() {
   let tasks = localStorage.getItem("tasks");
   if (tasks) {
      allTasks.innerHTML = tasks;
   }
}

getTasks();
