//Getting the todoList from localStorage and parsing it into an array. If there is no todoList in localStorage, it creates an empty array. 
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// It takes the value of the input field, trims it, and if it's not empty, it adds it to the todoList array, saves the array to localStorage, clears the input field, and renders the list.
 function addTask() {
  let input = document.getElementById('todoInput');
  let task = input.value.trim();
  if (task) {
      todoList.push({task, completed:false});
      localStorage.setItem('todoList', JSON.stringify(todoList));
      input.value = '';
      renderList();
  }
}

//The deleteTask function takes in an index, removes the item at that index from the todoList array, saves the updated array to localStorage, and then re-renders the list.
function deleteTask(index) {
  todoList.splice(index,1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderList();
}

//When the user clicks on a check icon, toggle the completed property of the todo item at the given index. 
function toggleCompleted(index) {
  todoList[index].completed = !todoList[index].completed;
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderList();
}

//The function creates a new list element, adds a check icon, a delete icon, and a task text element to the list element, and then adds the list element to the todoList element.
function renderList() {
  let listElement = document.getElementById('todoList');
  listElement.innerHTML = '';
  for (let i=0; i<todoList.length; i++) {
      let taskElement = document.createElement('li');
      let taskText = document.createElement('span');
      taskText.textContent = todoList[i].task;
      if (todoList[i].completed) {
          taskText.classList.add('completed');
      }
      let checkIcon = document.createElement('i');
      checkIcon.className = 'fa fa-check';
      checkIcon.onclick = function() {toggleCompleted(i)};
      taskElement.appendChild(checkIcon);
      taskElement.appendChild(taskText);
      let deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa fa-trash';
      deleteIcon.onclick = function() {deleteTask(i)};
      taskElement.appendChild(deleteIcon);
      listElement.appendChild(taskElement);
      }
    }

/* Calling the renderList function. */
    renderList();