import todoView from './todoView';

export default {
  render: function(todos) {
	  const ul = document.createElement('ul');
	  for (let todo of todos) {
	    const renderedTodo = todoView.render(todo);
		  ul.appendChild(renderedTodo);
	  }
    return ul;
	},
};
