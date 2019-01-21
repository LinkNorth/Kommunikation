import todoListView from './todoListView.js';
import todoModel from './todoModel.js';
const form = document.querySelector('form');
const todoList = document.querySelector('.todoList');
form.addEventListener('submit', function(e) {
  e.preventDefault();
	const input = document.querySelector('input');
	const title = input.value;
	todoModel.addTodo(title);
  todoList.innerHTML = "";
  todoList.appendChild(
    todoListView.render(todoModel.todos)
  );
  input.value = "";
});
