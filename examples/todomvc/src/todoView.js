export default {
	render: function(todo) {
		let li = document.createElement('li');
		li.textContent = todo.title;
		return li;
	}
};
