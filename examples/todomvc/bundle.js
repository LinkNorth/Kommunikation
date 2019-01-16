(function () {
	'use strict';

	var todoView = {
		render: function(todo) {
			let li = document.createElement('li');
			li.textContent = todo.title;
			return li;
		}
	};

	var todoListView = {
		render: function(todos) {
			let ul = document.createElement('ul');
			for (let todo of todos) {
				let renderedTodo = todoView.render(todo);
				ul.appendChild(renderedTodo);
			}
	    return ul
		}
	};

	var todoModel = {
		todos: [],
		addTodo: function(title) {
			this.todos.push({title: title});
		},
	};

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

}());
