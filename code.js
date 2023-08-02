// Function to add a new task to the list
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
      alert("Please enter a task.");
      return;
  }

  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerHTML = '<span>' + taskText + '</span><button onclick="removeTask(this)">Remove</button>';
  taskList.appendChild(li);

  taskInput.value = "";
}

// Function to remove a task from the list
function removeTask(element) {
  var li = element.parentElement;
  li.remove();
}
