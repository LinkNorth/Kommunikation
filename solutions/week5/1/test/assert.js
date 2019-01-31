const groupBy = require('../script').groupBy;
const assert = require('chai').assert;

const mock = [
  {name: 'Viktor', age: 23},
  {name: 'Viktor', age: 27},
  {name: 'Oskar', age: 27},
];

describe("groupBy - assert", function() {
  it("handles empty array", function() {
    const result = groupBy([], "");
    assert.typeOf(result, 'object');
    assert.isEmpty(result);
  });

  it('Handles grouping', function() {
    const result = groupBy(mock, "name");
    assert.typeOf(result, 'object');
    assert.hasAllKeys(result, ['Viktor', 'Oskar']);
    assert.lengthOf(result['Viktor'], 2);
    assert.lengthOf(result['Oskar'], 1);
  });

  it('Throws error when object is missing key', function() {
    const data = JSON.parse(JSON.stringify(mock));
    delete data[0].age;
    assert.throws(function() {
      groupBy(data, "age");
    });
  });
});
