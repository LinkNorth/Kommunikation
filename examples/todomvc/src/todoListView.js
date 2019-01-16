import todoView from './todoView.js';
export default {
	render: function(todos) {
		let ul = document.createElement('ul');
		for (let todo of todos) {
			let renderedTodo = todoView.render(todo);
			ul.appendChild(renderedTodo);
		}
    return ul
	}
}
