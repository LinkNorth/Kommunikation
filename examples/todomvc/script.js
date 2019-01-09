let form = document.querySelector('form');
let input = document.querySelector('input[name="todo"]');

// Controller
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let value = input.value;
  model.addTodo(value);
  input.value = "";
  view(model.todos);
});

// View
function view(todos) {
  let ul = document.querySelector('.todos');
  ul.innerHTML = "";
  for (let x of todos) {
    let li = document.createElement('li');
    li.textContent = x.toUpperCase();
    ul.appendChild(li);
  }
}

// Model
let model = {
  todos: [],
  addTodo: function(str) {
    this.todos.push(str);
  },  
  removeTodo: function(index) {
    this.todos.splice(index, 1);
  }
};
