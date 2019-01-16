import todoListView from './todoListView.js';
import todoModel from './todoModel.js';
let form = document.querySelector('form');
let todoList = document.querySelector('.todoList');
form.addEventListener('submit', function(e) {
  e.preventDefault();
	let input = document.querySelector('input');
	let title = input.value;
	todoModel.addTodo(title);
  todoList.innerHTML = "";
  todoList.appendChild(
    todoListView.render(todoModel.todos)
  );
  input.value = "";
});
