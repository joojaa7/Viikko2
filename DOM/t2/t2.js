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
  const ul = document.getElementById("#list");
  const li = document.createElement("li");
  const input = document.createElement("input");
  const label = document.createElement("label");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `todo-${i.id}`);
  if (i.completed){
    input.checked = true;
  };
  label.innerHTML = i.task;
  label.htmlFor = `todo-${i.id}`;
  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);

}

