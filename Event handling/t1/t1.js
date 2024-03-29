// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

console.log(todoList);


function createListElements(){
  const ul = document.getElementById("list");
  todoList.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" id="todo-${task.id}">
                      <label>${task.task}</label>
                      <button type="reset" id="${task.id}">Delete</button>`
      if (task.completed){
        li.innerHTML = `<input type="checkbox" id="todo-${task.id}" checked>
                        <label>${task.task}</label>
                        <button type="reset" id="${task.id}">Delete</button>`
      }
      ul.appendChild(li);
  });
}

function createBoxes(){
  const boxes = document.querySelectorAll("input[type=checkbox]");
  boxes.forEach(function(box) {
    box.addEventListener('change', function(){
      const boxsplit = box.id.split('-')
      todoList.forEach(function(i){
        if (i.id == boxsplit[1]){
          i.completed = !i.completed;
        }
      })
      console.log(todoList);
    })
  })
}
function createDeleteButtons(){
  const buttons = document.querySelectorAll("button[type=reset]")
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
      const list = document.getElementById('list');
      list.removeChild(e.target.parentNode)
      let j = 0;
      todoList.forEach(function(i){
        if (i.id == button.id){
          todoList.splice(j, 1);
        }
        j++;
      })
      console.log(todoList);
    })
  })
}

function deleteElements(){
  const buttons = document.querySelectorAll("button[type=reset]")
  const boxes = document.querySelectorAll("input[type=checkbox]");
  const listElements = document.querySelectorAll("li");
  for (const box of boxes){
    box.remove();
  }
  for (const button of buttons){
    button.remove();
  }
  for (const li of listElements){
    li.remove();
  }
}

createListElements();
createBoxes();
createDeleteButtons();


document.addEventListener("DOMContentLoaded", function() {
  const addBtn = document.getElementById("add-btn");
  const dialog = document.querySelector("dialog");
  const submitBtn = document.getElementById("submitBtn");
  const todo = document.getElementById("todoValue");
  todo.innerText = '';
  addBtn.addEventListener("click", function() {
    dialog.showModal();
  });

  submitBtn.addEventListener("click", function(e) {
    console.log(e);
    e.preventDefault();
    const data = {
      'id': todoList.length + 1,
      'task': todo.value,
      'completed': false
    }
    todoList.push(data);
    console.log(todoList);
    deleteElements();
    createListElements();
    createBoxes();
    createDeleteButtons();
    todo.value = '';
    dialog.close();
  });
});


