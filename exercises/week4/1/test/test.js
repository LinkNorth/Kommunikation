import assert from 'assert';
import script from '../script.js';

describe('Script', function() {
  
  it('Sum works', function() {
    assert.equal(script.sum([1, 2, 3]), 6);
    assert.equal(script.sum([]), 0);
  });
});
