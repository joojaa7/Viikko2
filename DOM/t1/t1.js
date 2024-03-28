'use strict';
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

for (const i of todoList) {
  const ul = document.getElementById("#list")
  let string = `<li><input type = "checkbox" id="todo-${i.id}">
                  <label for="todo-${i.id}">${i.task}</label></li>`;
  if (i.completed) {
    string = `<li><input type = "checkbox" id="todo-${i.id}" checked>
                              <label for="todo-${i.id}">${i.task}</label></li>`;
  }
  ul.insertAdjacentHTML("beforeend", string);
}
