const assert = require('assert');
const model = require('../src/todoModel.js');
describe('todoModel', function() {

  afterEach(function() {
    model.todos = [];
  });

  it('Can add a todo', function() {
    assert.equal(model.todos.length, 0);
    model.addTodo('Hello');
    assert.equal(model.todos.length, 1);
    assert.deepEqual(model.todos[0], {
      title: 'Hello',
    });
  });
});
