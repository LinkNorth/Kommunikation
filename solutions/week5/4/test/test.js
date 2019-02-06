const sinon = require('sinon');
const assert = require('assert');
const script = require('../script');

describe('Script', function() {
  it('Can increment', function() {
    assert.equal(script.getValue(), null);
    script.setValue(5);
    assert.equal(script.getValue(), 5);
    const spy = sinon.spy(script, 'setValue');
    script.increment(7);
    assert.equal(spy.callCount, 1);
    assert.equal(spy.getCall(0).args[0], 12);
    assert.equal(script.getValue(), 12);

    //assert.equal(spy.args[0][0], 12);
    //spy.calledWith(12);
       
  });
});
