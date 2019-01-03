const assert = require('assert');
const script = require('../script.js');

describe('Sum', function() {
  it('Works', function() {
    assert.equal(script.sum(1, 2), 3);
    assert.equal(script.sum(7, 2), 9);
  });
});

// Add multiply test here

